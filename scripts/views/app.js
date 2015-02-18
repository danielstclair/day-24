var app = app || {};

app.AppView = Backbone.View.extend({
	el: '#app-view',
	initialize: function(){
		_.bindAll(
			this,
			'onKeyUp',
			'createNewTodo',
			'addCollection'
			);

		this.itemsCollection = new app.TodoList();

		this.$textBox = $('#text-input');
		this.$listDisplay = $('#list-display');
		this.$todoChecked = $('#todo-checked');

		this.$textBox.on('keyup', this.onKeyUp);
		this.$todoChecked.on('change', this.onCheckedBox);
		this.itemsCollection.on('add', this.addCollection);

		this.itemsCollection.fetch();
	},

	onKeyUp: function(e){
		if(e.which === 13){
			this.createNewTodo();
			this.$textBox.val('');
		}
	},

	createNewTodo: function(){
		this.newItem = new app.Todo();
		this.newItem.set({
			title: this.$textBox.val()
		});

		this.newItem.save();
		this.itemsCollection.add(this.newItem);
	},

	addCollection: function(task){
		var TodoView = new app.TodoView({model: task});
		this.$listDisplay.append(TodoView.$el);
	}
});




























