import express from 'express';
import path from 'path';
import todo from './routes/todo.mjs';
import user from './routes/user.mjs';
const app = express()
const port = 3000;


app.use(express.urlencoded());
app.use(express.static(path.resolve('./public')));

app.use('/todos',todo);
app.use('/users',user);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})