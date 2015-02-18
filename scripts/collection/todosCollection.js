var app = app || {};

// Todo Collection. Backed by localStorage

app.TodoList = Backbone.Collection.extend({
	model: app.Todo,
	url: 'http://tiny-pizza-server.herokuapp.com/collections/dstclairtodoapp',

});

app.Todos = new app.TodoList();
