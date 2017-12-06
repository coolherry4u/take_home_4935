let validate = require("./validate.js");
let controller = require("./controller.js");
module.exports = [
	{  
		method : 'GET',
		path : '/',
		handler: function (request, reply) {
		        reply('ToDo List App!!!');
		}
    },
    {  
		method : 'POST',
		path : '/createToDo',
		handler :  controller.createToDo,
		config : {
			validate: {
			    payload : validate.toDoSchema
			}
		}  

    },
    
    {  
		method : 'POST',
		path : '/updateToDo',
		handler : controller.updateToDo,
		config : {
			validate : {
				payload : validate.toDoUpdateSchema
			}
		}  

    },
    {  
		method: 'Get',
		path: '/getToDoList',
		handler: controller.getToDoList
		
    },
    {  
		method : 'Get',
		path : '/updateToDoStatus/{toDoId}',
		handler : controller.updateToDoStatus,
    },
    {  
		method : 'Get',
		path : '/deleteToDo/{toDoId}',
		handler : controller.deleteToDo,
    },
    {  
		method : 'Get',
		path : '/getToDoByTitle/{title}',
		handler : controller.getToDoByTitle,  

    },
    {  
		method : 'Get',
		path : '/getToDoByDescription/{description}',
		handler : controller.getToDoByDescription,  

    }
] 