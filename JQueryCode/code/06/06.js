/**********
	Send data through Ajax
**********/

/****************
	(6.1) Additional HTML: use .load(url) to load the file
***************/

$(document).ready(function(){
	$('#letter-a a').click(function(event){
		// Prevent default event trigger: after executing the method，the path
		// won't change if you click others.
		event.preventDefault(); 
		$('#dictionary').load('a.html');
		// Show the dialog after explaining the loaded content.
		// In default, the request of ajax is asynchronous, sometimes, loading 
		// is not completed, the dialog will show first.
		//alert('Loaded!');
	});
});


/***********
	(6.2) Operate JavaScript object: use $.getJSON(para1,para2) to obtain the file and 
		  deal with the file
		  1. para1 is the URL, and para2 is a callback function, whose para3 is the return data.
		  2. traverse the data through the global function --$.each(para1,function(){})
***********/

$(document).ready(function(){
	$('#letter-b a').click(function(event){
		event.preventDefault();
		$.getJSON('b.json', function(data){
			var html = '';
			$.each(data, function(entryIndex, entry){
				html += '<div class="entry">';
				html += '<h3 class="term">' + entry.term + '</h3>';
				html += '<div class="part">' + entry.part + '</div>';
				html += '<div class="definition">'; 
				html += entry.definition; // obtain the content
				if(entry.quote){
					html += '<div class="quote">';
					$.each(entry.quote, function(lineIndex, line){
						html += '<div class="quote-line">' + line + '</div>';
					});
					if(entry.author){
						html += '<div class="quote-author">' + entry.author +'</div>';
					}
				 	html += '</div>';
				}
				html += '</div>';
				html += '</div>';
			});
			$('#dictionary').html(html);
		});
	});
});



/*****************
	(6.3) Execute the javascript(.js): use the global function $.getScript(url) to 
		  find the file.
*****************/

$(document).ready(function(){
	$('#letter-c a').click(function(event){
		event.preventDefault();
		$.getScript('c.js');
	});
});


/***************
	(6.4) Load XML: 1. use $.get(url, function(data){}) to find the file and 
					the para data is plain text.
					2. use .find()/.filter()/others to traverse XML.
*************/

$(document).ready(function(){
	$('#letter-d a').click(function(event){
		event.preventDefault();
		$.get('d.xml', function(data){
			
			$('#dictionary').empty(); //delete all the subNodes matched with the element(#dictionary)
			
			$(data).find('entry').each(function(){
				
				var $entry = $(this);

				//var html = '<div class="entry">';
				var html = '';
				html += '<div class="entry">';

				html += '<h3 class="term">' + $entry.attr('term');
				html += '</h3>';

				html += '<div class="part">' + $entry.attr('part');
				html += '</div>';
				html += '<div class="definition">';

				html += $entry.find('definition').text();

				var $quote = $entry.find('quote');
				if($quote.length){
					html += '<div class="quote">';
					$quote.find('line').each(function(){
						html += '<div class="quote-line">';
						html += $(this).text() + '</div>';
					});
					if ($quote.attr('author')) {
						html += '<div class="quote-author">';
						html += $quote.attr('author') + '</div>';
					}

					html += '</div>';
				}

				html += '</div>';
	
				html += '</div>';

				$('#dictionary').append(html); //right. And it is equal to $('#dictionary').append($(html));
				
				//$('#dictionary').html(html);//error,only show one entry,why?
				
			});
			
		});
	});
});


/*******************
	
	Executing the following code need web server which supports the php

*******************/

/*************
	(6.5) Obtain data from server based on get() or post()
****************/

$(document).ready(function(){
	$('#letter-e a').click(function(event){
		event.preventDefault();
		//var requestData = {'term': $(this).text()}; //why????????
		
		//$.get('e.php', requestData, function(data){
			//$('#dictionary').html(data);
		//});
		$.post('e.php', requestData, function(data){
			$('#dictionary').html(data);
		});
	});
});


/************
	(6.6) use load() to refact the above post()(6.5)
**************/

$(document).ready(function(){
	$('#letter-e a').click(function(event){
		event.preventDefault();
		var requestData = {'term': $(this).text()}; //why????????

		$('#dictionary').load('e.php', requestData);
		
	});
});


/**********
	(6.7) asynchronous submit the forms
************/

$(document).ready(function(){
	$('#letter-f form').submit(function(event){
		event.preventDefault();
		$.get('f.php', {'term': $('input[name="term"]').val()}, function(data){
			$('#dictionary').html(data);
		});
	});
});


/*************
	(6.8) serialize the forms
***********/

$(document).ready(function(){
	$('#letter-f form').submit(function(){
		var requestValue = $(this).serialize();
		$.get('f.php', requestValue, function(data){
			$('#dictionary').html(data);
		});
		return false;
	});
});


/**************
	observe the request
************/
$(document).ready(function(){
	$('<div class="loading">Loading</div>')
	.insertBefore('#dictionary')
	.ajaxStart(function(){
		$(this).show();
	})
	.ajaxStop(function(){
		$(this).hide();
	});
										 
});