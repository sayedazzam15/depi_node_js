import Joi from 'joi';

export default Joi.object({
    title: Joi.string().min(3).max(30).required(),
    description: Joi.string().min(3).max(30).required(),
    user_id: Joi.string().required()
 });

 