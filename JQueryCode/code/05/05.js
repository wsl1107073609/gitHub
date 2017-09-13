/*******
	(1.1)set a public property for all links
*******/
/*****
$(document).ready(function(){

	//$('div.chapter a').attr({rel:'external'});

	$('div.chapter a').attr({
		rel:'external',
		title:'Learn more at wikipedia'
	});

});
***********/

/*******
	(1.2)use value-callback to generate unique id for every elements
	specific operations:pass a function to id,not a value,and take the return as the value of property
*******/
/********
$(document).ready(function(){
	//what are the differences between $('div.chapter a[href*="wikipedia"]'),$('div.chapter a') and $('body a')?
	$('div.chapter a[href*="wikipedia"]').attr({
		rel: 'external',
		//title: 'Learn more at wikipedia',
		title: function(){
			return 'Learn more ' + $(this).text() + 'at wikipedia.';//
		},
		id: function(index, oldValue){
			return 'wikilink-' + index;
		}
	});
});


/************
	(2.1)use $() to create new elements,
	     use insertAfter() to insert them to chapter p,
	     and use prepenTo() to insert <a id="top"></a> to body
**************/
$(document).ready(function(){
	
	//$('<a href="#top">back to top</a>').insertAfter('div.chapter p');
	//$('<a id="top"></a>').prependTo('body');

 	$('<a href="#bottom">back to bottom</a>').insertBefore('div.chapter p');
	$('<a id="bottom"></a>').appendTo('body');

});

/***************
	(2.2)move elements and pack elements(Add the serial number)
		implicit iteration
**************/
/******
$(document).ready(function(){
	$('span.footnote').insertBefore('#footer')
					  .wrapAll('<ol id="notes"></ol>')
					  .wrap('<li></li>');
});
******/

/**********
	(2.3)1.Use each() to realize explicit iteration,this method has a callback 
	    function and the function will make every element to call once.
		2.Record the position of the footnotes.
*********/
/****
$(document).ready(function(){
	var $notes = $('<ol><id="#notes"></ol>').insertBefore('#footer');
	$('span.footnote').each(function(index){
		$('<sup>' + (index+1) + '</sup>').insertBefore(this);
		$(this).appendTo($notes).wrap('<li></li>');
	});
});
****/


/******
	(2.4)Use reverse insert method(反向插入方法) to realize code refactoring（代码重构）
	eg:use before() instead of insertBefore()
	When the number of string is rich, join() can be used.
*******/
/********
$(document).ready(function(){
	var $notes = $('<ol><id="#notes"></ol>').insertBefore('#footer');
	$('span.footnote').each(function(index){
		$(this)
			   //.before('<sup>' + (index+1) + '</sup>')
			   .before(['<sup>',index+1,'</sup>'].join(''))
		       .appendTo($notes)
		       .wrap('<li></li>');
	});
});
*********/

/*********
	(2.5)Add a link that point to bottom and a unique id for footnote,
		and add corresponding id for li to match the target. Meanwhile,
		use append() to add a link for footnote to point the above context.	
**********/
$(document).ready(function(){
	var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
	$('span.footnote').each(function(index){
		$(this).before(['<a href="#footnote-', index+1,
			           '" id="context-', index+1,
			           '" class="context">', '<sup>', index+1, '</sup></a>'].join(''))
		       .appendTo($notes)
		       .append(['&nbsp; (<a href="#context-', index+1, '">context</a>)'].join(''))
		       .wrap('<li id="footnote-' + (index+1) + '"></li>');
	});
});



/*******
	(2.6) Use clone() to copy elements and insert it to other parts
******/
/*****
$(document).ready(function(){

});	$('div.chapter p:eq(0)').clone().insertBefore('div.chapter');
******/

/*******
	(2.7)Use clone() to create pull quote(突出引用)，first，add class for 
	     the copy content, second, set the css for the class.
*******/
/*****
$(document).ready(function(){
	$('span.pull-quote').each(function(){
		var $parentParagraph = $(this).parent('p');
		
		$parentParagraph.css('position','relative');
		
		var $contentCopy = $(this).clone();
		$contentCopy.addClass('pulled')
			        .prependTo($parentParagraph);
		//$(this).clone().addClass('pulled').prependTo($parentParagraph);

	});
	
});
******/

/********
	(2.8)1.use html() to replace the specified context, first, use find() to find the replaced content TRC;
		second, take html(parameter) to instead of the TRC; third, use end() to return to the set.
		2. in order to change original style, use text() to get plain text(纯文本).
********/
$(document).ready(function(){
	$('span.pull-quote').each(function(){
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position','relative');
		
		var $contentCopy = $(this).clone();

		$contentCopy.addClass('pulled')
					.find('span.drop')
					.html('&hellip;')
					.end()
					.text($contentCopy.text())
			        .prependTo($parentParagraph);
		//$(this).clone().addClass('pulled').prependTo($parentParagraph);

	});
	
});