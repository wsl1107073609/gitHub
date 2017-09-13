$(document).ready(function(){
	
	/***?????????????????????????????????????????????????????????????????????????????????
	//单击Large Print按钮时，为body标签添加large类
	$('#switcher-large').on('click', function(){
		$('body').addClass('large');
	});

    //
    //$('#switcher-narrow').on('click', function(){
    	//$('body').addClass('narrow');

    //});
	

	//$('#switcher-default').on('click', function(){
		//$('body').removeClass('narrow');
	//});
    *****/

	/*********
    $('#switcher-large').click(function(){
    	$('body').addClass('large');
    });

    $('#switcher-narrow').click(function(){
    	$('body').addClass('narrow');
    });

    $('#switcher-default').click(function(){
		$('body').removeClass('narrow');
		$('body').removeClass('large');
	});
	**********/

    /*******
    $('#switcher h3').hover(function(){
		$(this).addClass('hover');
	}, function(){
		$(this).removeClass('hover');
	});
	$('#switcher h3').click(function(){
		$('#switcher button').toggleClass('hidden');
	});
	******/

	/*******
	$('#switcher').click(function(event){
		$('#switcher button').toggleClass('hidden');
	});
	******/
	$('#switcher').click(function(event){
		if (event.target == this) 
			{
				$('#switcher button').toggleClass('hidden');
			};
		
	});

	
	
	


});