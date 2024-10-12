import { model, Schema } from "mongoose";
import bcrypt from 'bcrypt';

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
export default model('user',userSchema);
