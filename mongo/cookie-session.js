import express from 'express';
import cookieSession from 'cookie-session';
const app = express()
const port = 3003;


// cookie-session

app.use(cookieSession({
    name: 'session',
    keys: ['my-secret-key'],
  
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

app.get('/get-session',(req,res)=>{
    res.send(req.session);
});



app.get('/set-session',(req,res)=>{
    req.session.views = (req.session.views || 0) + 1
    res.send(req.session.views + ' views')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})