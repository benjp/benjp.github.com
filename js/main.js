$(document).ready(function () {
  $.getJSON('json/nav-collapse.json', function(data) {
    var html = Mustache.to_html(navCollapseTpl, data);
    $('#nav-collapse').html(html);
  }); 
  

  $('#main-container').html('&nbsp;');

  $.get('html/sidebar.html', function(data) {
  	$('#sidebar-categories').html(data);
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
    var id = anchor.substring(anchor.indexOf("_")+1);

    $('#main-container').fadeOut(100, function() {
      $.get('contents/'+id+'.html', function(data) {
        $('#main-container').html(data);
        $('#main-container').fadeIn(100, function() {
      
        });  
      });
    
    });  

  }

  if (anchor == 'aboutme' || anchor == 'contact' || anchor == 'index' ) {

    $('#nav-'+anchor).addClass('active');

    $('#main-container').fadeOut(100, function() {
      $.get('html/'+anchor+'.html', function(data) {
        $('#main-container').html(data);
        $('#main-container').fadeIn(100, function() {
      
        });  
      });
    
    });  
    
  }

});
