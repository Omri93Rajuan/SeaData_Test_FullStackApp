import Joi from "joi";

const addUserSchema_joi = {
  first_name: Joi.string().min(2).max(256).required(),
  last_name: Joi.string().min(2).max(256).required(),
  phone_number: Joi.string()
    .ruleset.regex(/0[0-9]{1,2}-?\s?[0-9]{3}\s?[0-9]{4}/)
    .rule({ message: 'user "phone" must be a valid phone number' })
    .required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: 'user "mail" must be a valid mail' })
    .required(),
    city: Joi.string().min(2).max(256).required(),
    country: Joi.string().min(2).max(256).required(),
    job_title: Joi.string().min(2).max(256).required(),
    years_of_experience: Joi.number().max(99).required(),

};

export default addUserSchema_joi;