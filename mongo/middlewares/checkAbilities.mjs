export default function checkAbilities(ability){
    return (req,res,next)=>{
        try {
            if(!req.abilities.includes(ability)) throw new Error;
            next()
        } catch (error) {
            res.status(403).send();
        }
    }
}