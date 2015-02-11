var app = app || {};

// Todo Model with title and completed attributes

app.Todo = Backbone.Model.extend({
	// Default attributes
	defaults: {
		title: '',
		completed: false
	},

	// Toggle completed state of completed
	toggle: function(){
		this.save({
			completed: !this.get('completed')
		});
	}
});
