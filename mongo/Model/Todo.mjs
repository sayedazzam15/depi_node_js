import { model, Schema } from "mongoose";

const TodoSchema =  new Schema({
  title: String,
  description: String
});

export default model('todos',TodoSchema);