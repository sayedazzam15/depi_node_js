import express from 'express';
import User from '../Model/User.mjs';
const router = express.Router();
import schema from '../validation/user.mjs';
import checkAbilities from '../middlewares/checkAbilities.mjs';
import auth from '../middlewares/auth.mjs';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.slice(file.mimetype.indexOf('/')+1));
    }
  })
  
  const upload = multer({ storage: storage })
router.post('/',upload.single('avatar'),async (req,res)=>{
    try{
        res.status(201).send(await User.create({...req.body,role: 'user'}));
    }catch(error)
    {
        console.log(error);
        res.status(400).send(error)
    }
});

router.get('/',auth,checkAbilities('users.show'),async (req,res)=>{
    res.send(await User.find());
})
router.get('/:id',async (req,res)=>{
    res.send(await User.findById(req.params.id).populate('todos'));
})
export default router;