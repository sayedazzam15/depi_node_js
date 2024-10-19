export default (req,res,next)=>{
    try {
        if(req.role != 'admin') throw new Error;
        next();
    } catch (error) {
        res.status(403).send();
    }
}