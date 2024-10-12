import Joi from 'joi';

export default Joi.object({
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
 });

 