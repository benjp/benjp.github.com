$(document).ready(function () {

  $('#main-container').html('&nbsp;');

  $.get('html/sidebar.html', function(data) {
    $('#sidebar-categories').html(data);
  });
    
});

var curCat, curType;

$.address.change(function(event){
  $('.nav li').removeClass('active');
  var anchor = event.value.substring(1);
  if (anchor==="") anchor = "index";
  var url = 'html/index.html';

  if (anchor.indexOf('article')===0) {   //eg. anchor.startsWith('article')
    var id = anchor.substring(anchor.indexOf("_")+1);
    url = 'contents/'+id+'.html';
  } else if (anchor.indexOf('category')===0) {   //eg. anchor.startsWith('category')
    curCat = anchor.substring(anchor.indexOf("_")+1);
    curType = "category";
    url = 'html/archives.html';
  } else if (anchor.indexOf('tag')===0) {   //eg. anchor.startsWith('tag')
    curCat = anchor.substring(anchor.indexOf("_")+1);
    curType = "tag";
    url = 'html/archives.html';
  } else {
    $('#nav-'+anchor).addClass('active');
    url = 'html/'+anchor+'.html';
  }


  $('#main-container').fadeOut(100, function() {
    $.get(url, function(data) {
      $('#main-container').html(data);
      $('#main-container').fadeIn(100, function() {
      });
    });
  });

  
});
