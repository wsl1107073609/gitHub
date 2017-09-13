//set the parameter for the plug-in method and modify the default

$(document).ready(function(){

	//modify the default value of parameters
	$.fn.cycle.defaults.timeout = 10000;
	$.fn.cycle.defaults.random = true; //change the image randomly
	//
	$('#books').cycle({
		timeout: 2000,
		speed: 200,
		pause: true

	});

});

//self-define selector
$(document).ready(function(){
	var $books = $('#books');
	var $controls = $('<div id="books-controls"></div>');
	
	$controls.insertAfter($books);
	
	$('<button>Pause</button>').click(function(event){
		event.preventDefault();
		$books.cycle('pause');
	}).appendTo($controls);

	$('<button>Resume</button>').click(function(event){
		event.preventDefault();
		$books.cycle('resume');
	}).appendTo($controls);

});
