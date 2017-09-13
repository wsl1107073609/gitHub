$(document).ready(function() {
  
  
  //load the .html
  $('#letter-a a').click(function() {
    $.ajaxSetup({
      url: 'a.html',
      type: 'POST',
      dataType: 'html'
    });

    $.ajax({
      type: 'GET',
      success: function(data) {
        $('#dictionary').html(data);
      }
    });
    return false;
  });

  //load .json
  $('#letter-b a').click(function() {
    $.getJSON('b.json', function(data) {
      var html = '';
      $.each(data, function(entryIndex, entry) {
        html += '<div class="entry">';
        html += '<h3 class="term">' + entry.term + '</h3>';
        html += '<div class="part">' + entry.part + '</div>';
        html += '<div class="definition">';
        html += entry.definition;
        if (entry.quote) {
          html += '<div class="quote">';
          $.each(entry.quote, function(lineIndex, line) {
            html += '<div class="quote-line">' + line + '</div>';
          });
          if (entry.author) {
            html += '<div class="quote-author">' + entry.author + '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
      });
      $('#dictionary').html(html);
    });
    return false;
  });

  //load .js
  $('#letter-c a').click(function() {
    $.getScript('c.js');
    return false;
  });

  //load .xml
  $('#letter-d a').click(function() {
    $.get('d.xml', function(data) {
      $('#dictionary').empty();
      $(data).find('entry').each(function() {
        var $entry = $(this);
        var html = '<div class="entry">';
        html += '<h3 class="term">' + $entry.attr('term');
          html += '</h3>';
        html += '<div class="part">' + $entry.attr('part');
          html += '</div>';
        html += '<div class="definition">';
        html += $entry.find('definition').text();
        var $quote = $entry.find('quote');
        if ($quote.length) {
          html += '<div class="quote">';
          $quote.find('line').each(function() {
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
        $('#dictionary').append($(html));
      });
    });
    return false;
  });

  $('#letter-e a').click(function() {
    var requestData = {term: $(this).text()};
    $.get('e.php', requestData, function(data) {
      $('#dictionary').html(data);
    }).error(function(jqXHR) {
      $('#dictionary')
      .html('Sorry, but an error occurred: ' + jqXHR.status)
      .append(jqXHR.responseText);
    });
    return false;
  });

  $('#letter-f form').submit(function(event) {
    event.preventDefault();
    var formValues = $(this).serialize();
    $.get('f.php', formValues, function(data) {
      $('#dictionary').html(data);
    });
  });

  var url = 'http://examples.learningjquery.com/jsonp/g.php';
  $('#letter-g a').click(function() {
    $.getJSON(url + '?callback=?', function(data) {
      var html = '';
      $.each(data, function(entryIndex, entry) {
        html += '<div class="entry">';
        html += '<h3 class="term">' + entry.term + '</h3>';
        html += '<div class="part">' + entry.part + '</div>';
        html += '<div class="definition">';
        html += entry.definition;
        if (entry.quote) {
          html += '<div class="quote">';
          $.each(entry.quote, function(lineIndex, line) {
            html += '<div class="quote-line">' + line + '</div>';
          });
          if (entry.author) {
            html += '<div class="quote-author">' + entry.author + '</div>';
          }
          html += '</div>';
        }
        html += '</div>';
        html += '</div>';
      });
      $('#dictionary').html(html);
    });
    return false;
  });

  //
  $('#letter-h a').click(function() {
    $('#dictionary').load('h.html .entry');
    return false;
  });

  
  $('<div id="loading">Loading...</div>')
    .insertBefore('#dictionary')
    .ajaxStart(function() {
      $(this).show();
    }).ajaxStop(function() {
      $(this).hide();
    });

  //
  $('h3.term').live('click', function() {
    $(this).siblings('.definition').slideToggle();
  });
  

  //exercise(1):
  //$('#dictionary').load('exercises-content.html'); //right
  //$('#dictionary').load('exercises-content.html .letter'); //right

  //exercise(2):
  $('h3').mouseover(function(){
    var letter_id = $(this).parent().attr('id'); //get the parent's id of h3
    $('#dictionary').load('exercises-content.html #' + letter_id);
  });

});

/*
$(document).ready(function(){  
    $.getJSON('https：//api.github.com/users/jquery/repos', function(data){  
    var html = '';  
    $.each(data, function(jsonIndex, json_val){  
        html += '<ul style="list-style-type:none;">' + (jsonIndex + 1);  
        html += '<li>name: ' + json_val.name + '</li>';  
        html += '<li>html_url: ' + json_val.html_url + '</li>';  
        html += '</ul>';  
    });  
    $('#dictionary').html(html);  
    });  
*/


});