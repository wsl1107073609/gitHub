$(document).ready(function() {
  $('#selected-plays > li').addClass('horizontal');
  
  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('a[href^="mailto:"]').addClass('mailto');
  $('a[href$=".pdf"]').addClass('pdflink');
  $('a[href^="http"][href*="henry"]').addClass('henrylink');

  
  $('a').filter(function() {
    return this.hostname && this.hostname != location.hostname;
  }).addClass('external');
  

  $('tr:nth-child(odd)').addClass('alt');

  $('td:contains(Henry)') // Find every cell containing "Henry"
    .parent() // Select its parent
    .find('td:eq(1)') // Find the 2nd descendant cell
      .addClass('highlight') // Add the "highlight" class
    .end() // Return to the parent of the cell containing "Henry"
    .find('td:eq(2)') // Find the 3rd descendant cell
      .addClass('highlight'); // Add the "highlight" class


  //exercise(1):给位于嵌套列表第二层次的所有li元素添加special类
  //$('#selected-plays li:not(.horizontal)').addClass('special'); 
  $('#selected-plays > li > ul >li').addClass('special');

  //exercise(2):为表格第三列的所有单元添加year类
  $('td:nth-child(3)').addClass('year');

  //exercise(3):为表格中包含文本tragedy的第一行添加special类
  $('tr:contains(Tragedy)')
    .filter('tr:eq(0)')    //筛选出与指定表达式匹配的元素集合。
    .addClass('special');

  //exercise(4):选择所有包含link a的列表项li元素，为每个列表项的同辈列表项元素添加afterlink类
  $('#selected-plays > li > ul > li:has(a)')
    .nextAll()
    .not('li:has(a)')
    .addClass('afterlink');

  //exercise(5):add .tragedy for the ancestor ul nearest to the pdf link
  $('a[href$=".pdf"]')
    .parent()
    .parent()
    .addClass('tragedy');


});
