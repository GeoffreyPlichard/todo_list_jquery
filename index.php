<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Todo List With jQuery</title>
	<link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
		
		<header id="header">
			<h1>TODO LIST</h1>
			<h2>with jQuery</h2>
		</header>
		<section id="container">
			<header>
				<h2>Plan something</h2>
				<form>
					<input class="form-control" type="text" maxlength="40" id="new-todo" placeholder="Learn jQuery" autofocus autocomplete="off">
				</form>
			</header>
			<section id="main">
				<ul id="todo-list"></ul>
			</section>
			<footer id="footer">
				<input type="checkbox" id="toggle-all">
				<button class="btn" id="clear-completed">Clear completed</button>
				<span id="todo-count"></span>
				<p class="notice">Double click to</p>
			</footer>
		</section>

	
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="assets/js/app.js"></script>
	<script src="assets/js/field.js"></script>
	<script src="assets/js/todos.js"></script>
	<script>
		$(function(){
			app.start();
		});
	</script>
</body>
</html>