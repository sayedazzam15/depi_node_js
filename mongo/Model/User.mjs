import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt';
import fs from 'fs/promises';
import jwt from 'jsonwebtoken';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        min: [5,'name must be at least 5 characters'],
        max: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        // validate: {
        //   validator: function(v) {
        //     return /^[a-z1-9A-Z]{4,10}$/.test(v);
        //   },
        //   message: props => `${props.value} is not a valid password!`
        // },
        required: [true, 'User password required']
      },
      todos: {
        type: [Schema.Types.ObjectId],
        ref: 'todos'
      },
      tokens: [{token: {type: String,required: true}}],
      role: {
        type: String,
        in: ['user','admin']
      }
});
// schema middleware
userSchema.pre('save',async function(next){
  const user = this;
  if (!user.isModified('password')) {
    return next(); 
  }
  const hash = await bcrypt.hash(user.password,8);
  this.password = hash;
  next();
});

userSchema.statics.findByCredential =async (email,password)=>{
  const user = await User.findOne({email});
  if(!user) throw new Error;
  const isPasswordMatch = await bcrypt.compare(password,user.password);
  if(!isPasswordMatch) throw new Error;
  return user;
}

userSchema.methods.generateToken = async function(abilities = '*'){
  let user = this;
  const privateKey = await fs.readFile('./private.key');
  var token = jwt.sign({ id: user._id.toString(),abilities },privateKey,{ algorithm: 'RS256' });
  user.tokens.push({token});
  await user.save();
  return token;
}

userSchema.methods.toJSON = function(){
  let user = this;
  user = user.toObject();
  delete user.password;
  delete user.tokens;
  return user;
}

const User = model('user',userSchema);
export default User;
