/*
$(document).ready(function() {
  // Use attr() to add an id, rel, and title.
  $('div.chapter a[href*="wikipedia"]').attr({
    rel: 'external',
    title: function() {
      return 'Learn more about ' + $(this).text() + ' at Wikipedia.';
    },
    id: function(index, oldValue) {
      return 'wikilink-' + index;
    }
  });

  // Add "back to top" links.
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
  $('<a id="top"></a>').prependTo('body');

  // Create footnotes.
  var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
  $('span.footnote').each(function(index) {
    $(this)
      .before([
        '<a href="#footnote-',
        index + 1,
        '" id="context-',
        index + 1,
        '" class="context">',
        '<sup>',
        index + 1,
        '</sup></a>'
      ].join(''))
      .appendTo($notes)
      .append([
        '&nbsp;(<a href="#context-',
        index + 1,
        '">context</a>)'
      ].join(''))
      .wrap('<li id="footnote-' + (index + 1) + '"></li>');
  });

  // Style pull quotes.
  $('span.pull-quote').each(function(index) {
    
    var $parentParagraph = $(this).parent('p');
    $parentParagraph.css('position', 'relative');

    var $clonedCopy = $(this).clone();

    $clonedCopy
      .addClass('pulled')
      .find('span.drop')
        .html('&hellip;') //replace span.drop with ....
      .end()
      .text($clonedCopy.text()) //return the content of $cloneCopy;text() another means is that setting the content
      .prependTo($parentParagraph)
      .addClass('rounded-top')
      .wrapInner('<div class="rounded-bottom"></div>'); //wrap the elements with the div
  

  });
*/

//exercise(1):change the code that back to top links and begin from the fourth paragraph
/*
$(document).ready(function(){
  var $p = $('div.chapter p').eq(2).nextAll();
  $('<a href="#top">back to top</a>').insertAfter($p);
  $('<a id="top"></a>').prependTo('body');
});
*/

//exercise(2): when click the links:back to top, add a new paragraph that contain the style 
//after the links and  make sure the links work
$(document).ready(function(){
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p');
  $('a[href$="#top"]').click(function(){
    $('<p>You are were</p>').insertAfter(this);
  });
});


//exercise(3):when click the author, change the text to bold through adding the lable not class or css
/*
$(document).ready(function(){
  $('#f-author').click(function(){
    $(this).html('<b>by Edwin A. Abbott</b>');
    //$(this).wrapInner('<b></b>');
  });
});
*/

//exercise(4): when click the bold author, toggle the bold and normal
$(document).ready(function(){
  var simple = 'by Edwin A. Abbott';
  var b_simple = '<b>by Edwin A. Abbott</b>';
  
  $('#f-author').click(function(){
    if ($(this).html() == simple) {
      $(this).html(b_simple);
    }else if($(this).html() == b_simple){
      $(this).html(simple);
    };
  });

});


//exercise(5): add class inhabitants for every paragraph, but don't use addClass() 
//and effect the original class
$(document).ready(function(){
  $('p').each(function(){
    var a = $(this).attr('class'); //return the vaule
    if (a == null) {
      $(this).attr('class','inhabitants');
    }else{
      $(this).attr('class',a + ' inhabitants');
    };
  });
});