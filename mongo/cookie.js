import express from 'express';
import cookieParser from 'cookie-parser';
const app = express()
const port = 3001;
app.use(cookieParser());


app.get('/get-cookies',(req,res)=>{
    res.send(req.cookies);
});

app.get('/set-cookies',(req,res)=>{
    res.cookie('user_id',3,{httpOnly: true,secure: true});
    res.cookie('token','asdasdas');
    res.send({message: 'cookies user_id,token created'});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})