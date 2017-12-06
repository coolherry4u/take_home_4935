// Set the configuration for your app
  // TODO: Replace with your project's config object
module.exports = {
  writeToDoData : writeToDoData,
  updateToDo : updateToDo,
  getToDoList : getToDoList,
  deleteToDo : deleteToDo,
  updateToDoStatus : updateToDoStatus,
  getToDoByTitle : getToDoByTitle,
  getToDoByDescription : getToDoByDescription

}
let firebase = require("firebase");
let config = {
apiKey: "apiKey",
	authDomain: "bookslendingapi.firebaseapp.com",
	databaseURL: "https://todo-1eb0c.firebaseio.com/",
	storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
let database = firebase.database();
//console.log(database);
function writeToDoData(title, description, date, created,reply) {
	let id = database.ref().child('todo').push().key;
	let resp = {};
	database.ref('/todo/' + id).set({
		title : title,
		description : description,
		date : date,
		created : created,
		completed : false
	});

	database.ref('/todo/' + id).on("value",function(snapshot) {
		if( snapshot.val() == null){
			resp.status = false;
			resp.msg = "Error in saving data.Please try again.";
			resp.data = [];
		  	
		}else{
			resp.status = true;
			resp.msg = "Data save successfully.";
			resp.data = snapshot.val();
		}  	
		reply(resp);
	});
	

}

function updateToDo(id, title, description, date,reply) {
	let resp = {};
	database.ref('/todo/' + id).set({
		title : title,
		description : description,
		date : date,
		completed : false
	});

	database.ref('/todo/' + id).on("value",function(snapshot) {
		if( snapshot.val() == null){
			resp.status = false;
			resp.msg = "Error in updating data.Please try again.";
			resp.data = [];
		  	
		}else{
			resp.status = true;
			resp.msg = "Data updated successfully.";
			resp.data = snapshot.val();
		}  	
		reply(resp);
	});
	

}

function updateToDoStatus(toDoId,reply){
	database.ref('/todo/' + toDoId).on("value",function(snapshot) {
	  	let resp = {};
		if( snapshot.val() == null){
			resp.status = false
			resp.msg = "ToDo does not exist.";
			resp.data = [];
		}else{
			oldData = snapshot.val();
			oldData.completed = true;
			database.ref('/todo/' + toDoId).set(oldData);
			resp.status = true
			resp.msg = "ToDo status updated successfully.";
			resp.data = [];
			
		}
		reply(resp);	
	});
}
function getToDoList(reply){
	database.ref('/todo/').on("value",function(snapshot) {
		let resp = {};
		if( snapshot.val() == null){
			resp.status = false
			resp.msg = "no data found.";
			resp.data = [];
		}else{
			resp.status = true
			resp.msg = "Data get successfully.";
			resp.data = snapshot.val();
			
		}
		reply(resp);
	});
}
function deleteToDo(toDoId, reply) {
	let resp = {};
	let allData;
	database.ref('/todo/' + toDoId).on("value",function(snapshot) {
		
		allData = snapshot.val();
	});	
  	if(allData != null){
			if(allData.completed){
				database.ref('todo/' + toDoId).remove();
				resp.status = true;
				resp.msg = "Todo deleted successfully.";
				resp.data = [];
				reply(resp);
			}else{
				resp.status = false;
				resp.msg = "Todo is not completed.First update the status to complete.";
				resp.data = []; 
				reply(resp);
			}
		}else{
			resp.status = false
			resp.msg = "Todo id does not exist.";
			resp.data = []; 
			reply(resp);
			
		}
  	
}
function getToDoByTitle(title,reply){
	database.ref('/todo/').orderByChild('title').startAt(title).endAt(title + "\uf8ff").on("value",function(snapshot) {
	let resp = {};
	if( snapshot.val() == null){	
		resp.status = false
		resp.msg = "no matching data found";
		resp.data = [];	
	}else{
		resp.status = true
		resp.msg = "success.";
		resp.data = snapshot.val();
	}	
	reply(resp);
	});
}
function getToDoByDescription(description,reply){
	database.ref('/todo/').orderByChild('description').startAt(description).endAt(description + "\uf8ff").on("value",function(snapshot) {
	  
	let resp = {};
	if( snapshot.val() == null){	
		resp.status = false
		resp.msg = "no matching data found";
		resp.data = [];	
	}else{
		resp.status = true
		resp.msg = "success.";
		resp.data = snapshot.val();
	}	
	reply(resp);
	});
}


