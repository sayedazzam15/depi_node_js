import express from 'express';
import session from 'express-session';
const app = express()
const port = 3002;


// cookie-session

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
    cookie: { 
      maxAge: 60000, 
      secure: false    
    }
  }));

app.get('/get-session',(req,res)=>{
    

    res.send(req.session);
});

app.get('/set-session',(req,res)=>{
    req.session.user_id = 3;
    req.session.token = '1234';
    res.send();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})