/*
$(document).ready(function() {
  var $speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function() {
    var num = parseFloat($speech.css('fontSize'));
    switch (this.id) {
      case 'switcher-large':
        num *= 1.4;
        break;
      case 'switcher-small':
        num /= 1.4;
        break;
      default:
        num = parseFloat(defaultSize);
    }
    $speech.animate({fontSize: num + 'px'}, 'slow');
  });

  var $firstPara = $('p').eq(1);
  $firstPara.hide();
  $('a.more').click(function() {
    $firstPara.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if ($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
    return false;
  });

  $('div.label').click(function() {
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher
      .css({position: 'relative'})
      .fadeTo('fast', 0.5)
      .animate({
        left: paraWidth - switcherWidth
      }, {
        duration: 'slow',
        queue: false
      })
      .fadeTo('slow', 1.0)
      .slideUp('slow', function() {
        $switcher.css({backgroundColor: '#f00'});
      })
      .slideDown('slow');
  });

  $('p').eq(2)
    .css('border', '1px solid #333')
    .click(function() {
      var $clickedItem = $(this);
      $clickedItem.next().slideDown('slow', function() {
        $clickedItem.slideUp('slow');
      });
    });

  $('p').eq(3).css('backgroundColor', '#ccc').hide();
});
*/


//exercise(1)：at first, the content is hidden. when the page is loaded, it fade in slowly.
$(document).ready(function(){
  $('body').css('display','none');
  $('body').fadeIn(3000); //after 3 seconds, the body appeare.
  //$('body').fadeIn('slow', 'linear');
});


//exercise(2): when the mouse overs the para, change the background to yellow. 
$(document).ready(function(){
  $('p').mouseover(function(){
    $(this).css('backgroundColor','yellow');
  });
  $('p').mouseout(function(){
    $(this).css('backgroundColor','white');
  });
});

//exercise(3): 
$(document).ready(function(){
  $('#container h2').click(function(){
    $(this).fadeTo('slow', 0.25)
           .animate({paddingLeft: '+=200px'},{
            duration: 'slow',
            queue: false
          })
           .queue(function(next){
              $('div.speech').fadeTo('slow', 0.5);
           })
  });
});


//exercise(4):
$(document).ready(function(){
  var key_left = 37;
  var key_up = 38;
  var key_down = 39;
  var key_right = 40;
  var $switcher = $('#switcher');
  $switcher.css('position','relative');
  $(document).keyup(function(event){
    switch(event.which){
      case 37:
        $switcher.animate({
          left:'-=20px'
        },{
          duration:'fast'
        });
        break;
      case 38:
        $switcher.animate({
          top:'-=20px'
        },{
          duration:'fast'
        });
        break;
      case 39:
        $switcher.animate({
          left:'+=20px'
        },{
          duration:'fast'
        });
        break;
      case 40:
        $switcher.animate({
          top:'+=20px'
        },{
          duration:'fast'
        });
        break;
    }
  });
});