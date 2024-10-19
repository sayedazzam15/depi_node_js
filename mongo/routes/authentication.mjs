import express from 'express';

import schema from '../validation/authentication.mjs';
import User from '../Model/User.mjs';
import auth from '../middlewares/auth.mjs';
import isAdmin from '../middlewares/isAdmin.mjs';
import checkAbilities from '../middlewares/checkAbilities.mjs';
const router = express.Router();

router.post('/login',async (req,res)=>{
    try {
        const {email,password} = req.body;
        await schema.validateAsync(req.body);
        let user = await User.findByCredential(email,password);
        const token = await user.generateToken(['profile.show']);
        res.send({user,token});
    } catch (error) {
        const message = error.message || 'invalid data';
        res.status(400).send({error: message});
    }
});


router.post('/admin/login',async (req,res)=>{
    try {
        const {email,password} = req.body;
        await schema.validateAsync(req.body);
        let user = await User.findByCredential(email,password);
        const token = await user.generateToken(['profile.show','users.show','users.create']);
        res.send({user,token});
    } catch (error) {
        const message = error.message || 'invalid data';
        res.status(400).send({error: message});
    }
});

router.get('/profile',auth,checkAbilities('profile.show'),async (req,res)=>{
    res.send({user: req.user});
});


export default router;