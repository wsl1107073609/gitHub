$(document).ready(function() {
  
  // Enable hover effect on the style switcher
  $('#switcher').hover(function() {
    $(this).addClass('hover');
  }, function() {
    $(this).removeClass('hover');
  });

  // Allow the style switcher to expand and collapse.
  var toggleSwitcher = function(event) {
    if (!$(event.target).is('button')) {
      $('#switcher button').toggleClass('hidden');
    }
  };
  $('#switcher').bind('click', toggleSwitcher);

  // Simulate a click so we start in a collaped state.
  $('#switcher').click();

  // The setBodyClass() function changes the page style.
  // The style switcher state is also updated.
  var setBodyClass = function(className) {
    $('body').removeClass().addClass(className);

    $('#switcher button').removeClass('selected');
    $('#switcher-' + className).addClass('selected');

    $('#switcher').unbind('click', toggleSwitcher);

    if (className == 'default') {
      $('#switcher').bind('click', toggleSwitcher);
    }
  };

  // begin with the switcher-default button "selected"
  $('#switcher-default').addClass('selected');

  // Map key codes to their corresponding buttons to click
  var triggers = {
    D: 'default',
    N: 'narrow',
    L: 'large'
  };

  // Call setBodyClass() when a button is clicked.
  $('#switcher').click(function(event) {
    if ($(event.target).is('button')) {
      var bodyClass = event.target.id.split('-')[1];
      setBodyClass(bodyClass);
    }
  });

  // Call setBodyClass() when a key is pressed.
  $(document).keyup(function(event) {
    var key = String.fromCharCode(event.keyCode);
    if (key in triggers) {
      setBodyClass(triggers[key]);
    }
  });

 
  //exervcise(1):add .selected to author when it is clicked
  $('.author').click(function(){
    $(this).addClass('selected');
  });

  //exercise(2):toggle the available of the text when double-click the h3
  $('.chapter-title').dblclick(function(){    
    //$(this).nextAll().addClass('hidden'); //使用addclass()时，文本隐藏之后再点击无法显示
    $(this).nextAll().toggleClass('hidden');
  });

  //exercise(3)：when click the right key, toggle the next class of body
  var temp = '#switcher-default';
  var key = 39;
  $('#switcher-default').addClass('selected').click(function(){
    $('body').removeClass().addClass('default');
  });
  $('#switcher-default').trigger('click');
  $('#switcher-narrow').click(function(){
    $('body').removeClass().addClass('narrow');
  });
  $('#switcher-large').click(function(){
    $('body').removeClass().addClass('large');
  });
  $('#switcher button').click(function(){
    $('#switcher button').removeClass('selected');
    $(this).addClass('selected');
    temp = $(this);
  });
  //当按钮被松开时，发生 keyup 事件。它发生在当前获得焦点的元素上。
  //针对键盘和鼠标事件，event.which 这个属性能确定到底按的是哪个键或按钮。
  $(document).keyup(function(event){
    if (key == event.which) {
      if (temp == '#switcher-default') {
        $('#switcher-default').trigger('click');
      };
      if (temp.attr('id') == '#switcher-large') {
        $('#switcher-default').trigger('click');
      }else{
        $(temp).removeClass('selected').next().trigger('click');
      };

    };
  });
  
});



//exercise(4):use console.log() to record the axis X Y of the position that mouse moved
$(document).ready(function(){
  $(document).mousemove(function(event){
    console.log(event.clientX);
    console.log(event.clientY);
  });
});


//exercise(5):
$(document).ready(function(){
  
  var up_Y, down_Y; //定义两个变量
 
  $(document).click(function(){
    $('p').addClass('hidden');
  });

  $(document).mousedown(function(down){
    down_Y = down.pageY;
  });
  
  $(document).mouseup(function(up){
    up_Y = up.pageY;
    if (down_Y < up_Y) {
      $('p').removeClass('hidden');
    };
  });

});