(function(context){

	var field = {

		$el: null,

		init: function(){
			self.$el = $("#new-todo");

			$('#container header form').on('submit', this.on_submit);

		},

		on_submit: function(event){
			event.preventDefault();

			var todo = self.$el.val();
			if(todo == '') return;

			app.todos.add(todo);

			self.$el.val('');
		}

	};

	var self = field;
	context.field = field;

})(app);