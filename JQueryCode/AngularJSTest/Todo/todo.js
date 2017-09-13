angular.module("todoApp",[])
	   .controller("TodoListController",function(){
	   		//todoListController as todoList
	   		var todoList = this;
	   		//define the object todos of todoList
	   		todoList.todos = [
	   			{text:"learn angular", done:true},
	   			{text:"build an angular app", done:false}
	   		];

	   		//add todo to todoList
	   		todoList.addTodo = function(){
	   			todoList.todos.push({text:todoList.todoText, done:false});
	   			todoList.todoText = "";
	   		};

	   		//calculate the number of todos which satisfied that todo.done is false
	   		todoList.remaining = function(){
	   			var count = 0;
	   			angular.forEach(todoList.todos, function(todo){
	   				count += todo.done ? 0 : 1;
	   			});
	   			return count;
	   		};

	   		//delete the todo whose done is false,push the leave to todoList
	   		todoList.archive = function(){
	   			var oldTodos = todoList.todos;
	   			todoList.todos = [];
	   			angular.forEach(oldTodos, function(todo){
	   				//console.log(todo.done);
	   				if(!todo.done) todoList.todos.push(todo);
	   			});
	   		};

	   });