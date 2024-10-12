import { model, Schema } from "mongoose";

const TodoSchema =  new Schema({
  title: String,
  description: String,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

export default model('todos',TodoSchema);
