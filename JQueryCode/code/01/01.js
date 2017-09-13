//由于JavaScript插入了highlight类，页面中的两段诗歌变成了斜体，
//带了灰色背景，这些样式来源于01.css中
$(document).ready(function(){
	$('div.poem-stanza').addClass('highlight');
});