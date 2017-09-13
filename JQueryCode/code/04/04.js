$(document).ready(function(){
	
	/******only change  fontsize bigger one time
	$('#switcher-large').click(function(){
		$('div.speech').css('fontSize',20);
	});
	*******/

	/*******change fontsize bigger many times
	var $speech = $('div.speech');
	//trigger event
	$('#switcher-large').click(function(){
		//only extract value part of fontSize
		var num = parseFloat($speech.css('fontSize'));
		num = num * 1.4;
		$speech.css('fontSize', num + 'px');
	});
	****************/


	/***************smaller fontsize many times********/
	var $speech = $('div.speech');
	//trigger event
	$('#switcher-samll').click(function(){
		//only extract value part of fontSize
		var num = parseFloat($speech.css('fontSize'));
		num = num / 1.4;
		$speech.css('fontSize', num + 'px');
	}); 

	/*********
	$('p').eq(1).hide();

	$('a.more').click(function(event){
		event.preventDefault();
		//$('p').eq(1).show();
		//$('p').eq(1).show('slow');
		//$('p').eq(1).fadeIn('slow');
		$('p').eq(1).slideDown('slow');
		$(this).hide();

	});
	**************/


	/*******available：method 1 ********/
	var $firstpara = $('p').eq(1);
	$firstpara.hide();
	$('a.more').click(function(event){
		event.preventDefault();
		if ($firstpara.is(':hidden')) {
			$firstpara.fadeIn('slow');
			$(this).text('read less');
		}else{
			$firstpara.fadeOut('slow');
			$(this).text('read more');
		}
	});
    

    /*******available：method 2 **********
	var $firstpara = $('p').eq(1);
	$firstpara.hide();
	$('a.more').click(function(event){
		event.preventDefault();
		$firstpara.slideToggle('slow');
		var $link = $(this);
		if ($link.text() == 'read more') {
			$link.text('read less');
		}else{
			$link.text('read more');
		}
	});
	****************/

	/************create custom animation***********
	var $firstpara = $('p').eq(1);
	$firstpara.hide();
	$('a.more').click(function(event){
		event.preventDefault();
		//$firstpara.animate({height:'toggle'},'slow');
		$firstpara.animate({opacity:'toggle',height:'toggle'},'slow');
		var $link = $(this);
		if ($link.text() == 'read more') {
			$link.text('read less');
		}else{
			$link.text('read more');
		}
	});
	*****************/

	/**********
	var $speech = $('div.speech');
	var defaultsize = $speech.css('fontSize');
	//trigger event
	$('#switcher button').click(function(){
		//only extract value part of fontSize
		var num = parseFloat($speech.css('fontSize'));
		switch(this.id){
			case '#switcher-large':
			    num = num * 1.4;
			    break;
			case '#switcher-samll':
				num = num / 1.4;
				break;
			default:
				num = parseFloat(defaultsize);
		}
		$speech.animate({fontSize:num + 'px'},'slow');
	});
    ********/

    /*********
    	change every paragraph style
    	move mouse to make p3 hide or show
    *********/
    /*******
    $('p').eq(0).css('color','#aaa');
    $('p').eq(2).css('border','1px solid #333');
    $('p').eq(3).hide();
    //$('.speech').click(function(){
    	//$('p').eq(3).show().css('background','#ccc');
    //});
	$('.speech').mouseover(function(){
    	$('p').eq(3).show().css('background','#ccc');
    });
    $('.speech').mouseout(function(){
    	$('p').eq(3).hide();
    });
	********/

	/*************
		change div.switcher's position and style
		add class hover for div.label

	****************
	$('div.label').hover(function(){
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	});

	$('div.label').click(function(){
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();
		$('#switcher').css({position:'relative'})
					  .animate({borderWidth:'5px'},'slow')
					  .animate({left:paraWidth - switcherWidth},'slow')
					  .animate({height:'+=20px'},'slow');
	});
	******/

	/*********
		use cluster to queue jquery style

	***********/
	/*****
	$('div.label').click(function(){
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();
		$('#switcher').css({position:'relative'})
					  .fadeTo('fast',0.5)        //reduce the opacity to 0.5
					  .animate({left:paraWidth - switcherWidth},'slow')   //move it to right
					  .fadeTo('slow',0.1)             //reduce the opacity to 0.1
					  .slideUp('slow')   //hide it 
					  .slideDown('slow'); //show it
	});
	******/

	/******
		across the queue
	*******/
	/*****
	$('div.label').click(function(){
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();
		$('#switcher').css({position:'relative'})
					  .fadeTo('fast',0.5)
					  .animate({left:paraWidth - switcherWidth},
					  {duration:'slow',queue:false})//use the second style, fadeTo() and animate() run at the same time
					  .fadeTo('slow',1.0)
					  .slideUp('slow')
					  .slideDown('slow');

	});
	*******/


});


/*********
		Manual queue:method 1
******/
$(document).ready(function(){
	$('div.label').click(function(){
		var paraWidth = $('div.speech p').outerWidth();
		
		//var switcherWidth = $().parent().outerWidth();
		
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();

		$('#switcher').css({position:'relative'})
					  .fadeTo('fast',0.5)
					  .animate({left:paraWidth - switcherWidth},{duration:'slow',queue:false})
					  .fadeTo('slow',1.0)
					  .slideUp('slow')
					  .css({backgroundColor:'#f00'})
					  .slideDown('slow');

	});

});

/***********
	use queue() to add non-effect method to queue
********/
$(document).ready(function(){
	$('div.label').click(function(){
		var paraWidth = $('div.speech p').outerWidth();
		var $switcher = $(this).parent();
		var switcherWidth = $switcher.outerWidth();
		$('#switcher').css({position:'relative'})
					  .fadeTo('fast',0.5)
					  .animate({left:paraWidth - switcherWidth},{duration:'slow',queue:false})
					  .fadeTo('fast',1.0)
					  .slideUp('slow')
					  .queue(function(next){
					  	$('#switcher').css('backgroundColor','#f00');
					  	//ensure the interruption continous and connect the subsequent slideDowm()
					  	//if next() does not exist, the div.swithcher part does not appeare
					  	next();   
					  })
					  .slideDown('slow')
	});
});



/*********
	Deal with multiple sets of elements: 
	1.change the border of paragraph3
	2.changde backgroundcolor of p4 and then hide it
*********/
/*********
$(document).ready(function(){
	$('p').eq(2).css('border','2px solid #333');
	$('p').eq(3).css('backgroundColor','#ccc').hide();
});
**********/

/********
	deal with multiple sets of elements:
	1.change the border of p3 and backgroundColor of p4 and then hide p4 
	2.if p3 was clicked, p3 will slideUp and p4 will slideDown
*******/
$(document).ready(function(){
	$('p').eq(2).css('border','2px solid #333')
				.click(function(){
					
					/*****
						separate deal with it
					*****/
					//$(this).slideUp('slow');
					//var $paragraph = $(this).next();
					//$paragraph.slideDown('slow');
					
					/************
						combain 
					*********/
					//$(this).slideUp('slow').next().slideDown('slow');





					/************
						jquery provide callback function for every effect methods and use callback function to realize queue
						question: 
						in the slideDown(),$(this) is not p3,it is $(this).next(), that is p4
						and these effects that slideDown and slideUp will works p4
                    ***********/
                    //$(this).next().slideDown('slow',function(){
                    	//$(this).slideUp('slow');
                    //});

					/************
						In order to avoid above question, before the function() ,use var to save p3
					**********/
					var $paragraph = $(this);
					$(this).next().slideDown('slow',function(){
						$paragraph.slideUp('slow');
					});

				});
	$('p').eq(3).css('backgroundColor','#ccc').hide();
});




