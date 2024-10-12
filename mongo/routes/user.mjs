import express from 'express';
import User from '../Model/User.mjs';
const router = express.Router();
import schema from '../validation/user.mjs';

router.post('/',async (req,res)=>{
    try{
        res.status(201).send(await User.create(req.body));
    }catch(error)
    {
        console.log(error);
        
        res.status(400).send(error)
    }
});

router.get('/',async (req,res)=>{
    res.send(await User.find());
})
router.get('/:id',async (req,res)=>{
    res.send(await User.findById(req.params.id).populate('todos'));
})
export default router;