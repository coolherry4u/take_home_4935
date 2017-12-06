Database used : Firebase

Postman collection link : https://www.getpostman.com/collections/0bf361717060e60834f4

Services description

1 - Create todo item to list 

	Request type : POST
	Data type : application/json
	Url : localhost:8080/createToDo
	Test data : {"title":"test","description":"test","date":"2017-12-23"}

2 - update todo list item 

	Request type : POST
	Data type : application/json
	Url : localhost:8080/updateToDo
	Test data : {"id":"-L-ad5c4BijynRAOsIky","title":"test11","description":"test","date":"2017-12-23"}

3 - get all todo list
	
	Request type : GET
	Data type : application/json
	Url : localhost:8080/getToDoList
	Test data : no data required

4 - delete todo item
	
	Request type : GET
	Data type : application/json
	Url : localhost:8080/deleteToDo/toDoId
	Test data : toDoID = -L-bNr5nvvAu0q5XfNMc

5 - get all todo by title
	
	Request type : GET
	Data type : application/json
	Url : localhost:8080/getToDoByTitle/title
	Test data : title = test

6 - get all todo by description
	
	Request type : GET
	Data type : application/json
	Url : localhost:8080/getToDoByDescription/description
	Test data : description = test

7 - update todo status(completed:true) by toDoId
	
	Request type : GET
	Data type : application/json
	Url : localhost:8080/updateToDoStatus/toDoId
	Test data : toDoId = "-L-bNr5nvvAu0q5XfNMc