$(document).ready(function () {
  $.getJSON('json/nav-collapse.json', function(data) {
    var html = Mustache.to_html(navCollapseTpl, data);
    $('#nav-collapse').html(html);
  }); 
  

  $('#main-container').html('&nbsp;');

  
  $.getJSON('json/sidebar-nav.json', function(data) {
    var html = Mustache.to_html(sidebarNavTpl, data);
    $('#sidebar-nav').html(html);
  });    
  
  $.getJSON('json/sidebar-categories.json', function(data) {
    var html = Mustache.to_html(sidebarNavTpl, data);
    $('#sidebar-categories').html(html);
  }); 

});



if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.indexOf(str) == 0;
  };
}



$.address.change(function(event){
  $('.nav li').removeClass('active');
  var anchor = event.value.substring(1);
  if (anchor=="") anchor = "index";
  if (anchor.startsWith('article')) {
    $.get('contents/1.html', function(data) {
      $('#main-container').html(data);
    });      
  }

  if (anchor == 'aboutme' || anchor == 'contact' || anchor == 'index' ) {

    $('#nav-'+anchor).addClass('active');

    $('#main-container').fadeOut('fast', function() {
      $.get('html/'+anchor+'.html', function(data) {
        $('#main-container').html(data);
        $('#main-container').fadeIn('fast', function() {
      
        });  
      });
    
    });  
    
  }

});
