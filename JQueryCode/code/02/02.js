//选择元素并且添加相应的样式
//css选择符、属性选择符、自定义选择符     
$(document).ready(function(){
	
	//使用jQuery动态地将css中的horizontal类添加到顶级列表项中
	$('#selected-plays > li').addClass('horizontal');
    
    //为非顶级项列表添加样式，使用否定式伪类选择符来识别没有horizontal类的所有列表项	
	$('#selected-plays li:not(.horizontal)').addClass('sub-level');
    
    //为带有href属性且以mailto开头的a元素添加样式
	$('a[href^="mailto:"]').addClass('mailto');
    
    //为带有href属性且以.pdf结尾的a元素添加样式
	$('a[href$=".pdf"]').addClass('pdflink');
	
	//为以http开头且任意位置包含henry的链接添加一个样式
	$('a[href^="http"][href*=henry]').addClass('henrylink');

	//为奇数行添加样式
	//$('tr:even').addClass('alt');
	//$('tr:nth-child(even)').addClass('alt');
	$('tr:nth-child(odd)').addClass('alt');
	//$('tr:nth-child(2)').addClass('alt');
	
	//基于上下选择元素
	//$('td:contains(Henry)').addClass('highlight');

	//为特定的单元格添加样式
	//$('td:contains(Henry)').next().addClass('highlight');

	//
	//$('td:contains(Henry)').nextAll().addClass('highlight');

	//??????????????????????????????addBack()方法不识别？
	//$('td:contains(Henry)').nextAll().addBack().addClass('highlight');

	$('td:contains(Henry)').parent()
		.find('td:eq(1)')
		.addClass('highlight')
		.end()
		.find('td:eq(2)')
		.addClass('highlight');
});

