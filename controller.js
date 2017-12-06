
let database = require("./database.js");
module.exports = {
  createToDo : createToDo,
  updateToDoStatus : updateToDoStatus,
  getToDoList : getToDoList,
  updateToDo : updateToDo,
  deleteToDo : deleteToDo,
  getToDoByTitle : getToDoByTitle,
  getToDoByDescription : getToDoByDescription
}
function createToDo(request, reply) {
	let date = new Date(request.payload.date);
	request.payload.date = date.getFullYear()+'-'+ date.getMonth() +'-'+ date.getDate();

	database.writeToDoData(
					request.payload.title,
					request.payload.description,
					request.payload.date,
					request.payload.created,
					reply
				);
	    
}
function updateToDo(request, reply) {
	let date = new Date(request.payload.date);
	request.payload.date = date.getFullYear()+'-'+ date.getMonth() +'-'+ date.getDate();

	database.updateToDo(
					request.payload.id,
					request.payload.title,
					request.payload.description,
					request.payload.date,
					reply
				);
	    
}

function updateToDoStatus(request, reply) {
	database.updateToDoStatus(request.params.toDoId,reply)
}
function getToDoList(request, reply) {
	database.getToDoList(reply)
}

function deleteToDo(request, reply) {
	database.deleteToDo(request.params.toDoId,reply)
}
function getToDoByTitle(request, reply) {
	database.getToDoByTitle(request.params.title,reply)
}
function getToDoByDescription(request, reply) {
	database.getToDoByDescription(request.params.description,reply)
}
