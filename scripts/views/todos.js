var app = app || {};

app.TodoView = Backbone.View.extend({
	initialize: function(){

		_.bindAll(
			this,
			'onCheckBoxClicked'
		);

		var listTemplate = _.template($('#template').html());
		this.$el = $(listTemplate(this.model.attributes));

		this.$textBox = $('#text-input');
		this.listDisplay = $('#listDisplay');
		this.$todoChecked = $('#todo-checked');

		this.$todoChecked.on('click', this.onCheckBoxClicked);

	},

	onCheckBoxClicked: function(){
		this.model.set({completed:true});
	}
});

// app.TodoView = new app.TodoView();
