(function(context){

	var todos = {

		$el: null,

		init: function(){

			this.$el = $('#todo-list');

			this.$el.on('click', '.destroy', this.on_destroy);
			this.$el.on('click', '.toggle', this.on_complete);
			$('#clear-completed').on('click', this.on_clear);

			this.$el.on('dblclick', 'li', this.start_edit);

			this.$el.on('submit blur', 'li form', this.end_edit);

			$('#toggle-all').on('click', this.check_all);
		},

		add: function(todo){
			var html = '<li class="list">' +
                    '<div class="view">' +
                        '<input class="toggle" type="checkbox">'+
                        '<label>'+todo+'</label>'+
                        '<button class="destroy glyphicon glyphicon-remove"></button>' +
                    '</div>' +
                    '<form>'+
                    	'<input class="edit" type="text">' +
                    '</form>' +
                    '</li>';


            this.$el.append(html);
            this.$el.find('li').fadeIn();

            this.update_info();
		},

		on_destroy: function(){
			$(this).closest('li').remove();

			self.update_info();
		},

		on_complete: function(){
			$(this).closest('li').toggleClass('completed');

			self.update_info();
		},

		on_clear: function(){
			self.$el.find('li.completed').remove();
			$('#toggle-all').prop('checked', false);
		},

		update_info: function(){
			var total = this.$el.children('li').length;
			var completed = this.$el.children('li.completed').length;
			var left = total - completed;

			var left_message = '';

			if(left > 0){
				left_message = '<strong>'+left+'</strong>';
				left_message += (left == 1) ? ' item ' : ' items ';
				left_message += 'left';
			}

			$('#todo-count').html(left_message);
		},

		start_edit: function(){
			$(this).find('label').css('opacity', '0');
			$(this).find('.edit')
				.css('display', 'block')
				.val($(this).find('label').text())
				.focus();
		},

		end_edit: function(event){
			event.preventDefault();

			var $li = $(this).closest('li');
			var value = $li.find('.edit').val();

			if(value.trim() == ''){
				$li.remove();
				self.update_info();
			}else{
				$li.find('label')
					.text(value)
					.css('opacity', '1')
					.end()
					.find('.edit')
					.css('display', 'none');
			}
		},

		check_all: function(){
			if($(this).is(':checked')){
				self.$el.find('.toggle').prop('checked', true);
				self.$el.find('li').addClass('completed');
			}else{
				self.$el.find('.toggle').prop('checked', false);
				self.$el.find('li').removeClass('completed');
			}
		}

	};

	var self = todos;
	context.todos = todos;

})(app);