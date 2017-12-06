let Joi = require("joi");
const toDoSchema = {
  title : Joi.string().required(),
  description : Joi.string().required(),
  date : Joi.date().required(),
  created: Joi.date().default(Date.now, 'time of creation'),
}

const toDoUpdateSchema = {
  id : Joi.required(),
  title : Joi.string().required(),
  description : Joi.string().required(),
  date : Joi.date().required()
}

module.exports = {
  toDoSchema : toDoSchema,
  toDoUpdateSchema : toDoUpdateSchema,
}