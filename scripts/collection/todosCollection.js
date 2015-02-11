var app = app || {};

// Todo Collection. Backed by localStorage

var TodoList = Backbone.Collection.extend({
	model: app.Todo,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/dstclairtodoapp',
	// localStorage: new Backbone.LocalStorage('todos-backbone'),
	completed: function(){
		return this.filter(function(todo){
			return todo.get('completed');
		});
	},
	remaining: function(){
		return this.without.apply(this, this.completed());
	},
	nextOrder: function(){
		if(!this.length){
			return 1;
		}
		return this.last().get('order') + 1;
	},
	comparator: function(todo){
		return todo.get('order');
	}
});

app.Todos = new TodoList();
