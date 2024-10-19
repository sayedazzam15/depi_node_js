import jwt from 'jsonwebtoken';
import fs from 'fs/promises';
import User from '../Model/User.mjs';

export default async (req,res,next)=>{
   try {
    const token = req.header('Authorization').replace('Bearer ','');
    const publicKey = await fs.readFile('./public.key');
    const payload = jwt.verify(token,publicKey);
    const user = await User.findOne({_id: payload.id});
    req.user = user;
    req.abilities = payload.abilities; 
    
    next();
   } catch (error) {
    console.log({error});
    
        res.status(401).send();
   }
}