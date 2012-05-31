$.getJSON('json/nav-collapse.json', function(data) {
  var html = Mustache.to_html(navCollapseTpl, data);
  $('#nav-collapse').html(html);
}); 

$.get('html/index.html', function(data) {
  $('#main-container').html(data);
});

$.getJSON('json/sidebar-nav.json', function(data) {
  var html = Mustache.to_html(sidebarNavTpl, data);
  $('#sidebar-nav').html(html);
});    

$.getJSON('json/sidebar-categories.json', function(data) {
  var html = Mustache.to_html(sidebarNavTpl, data);
  $('#sidebar-categories').html(html);
});    

