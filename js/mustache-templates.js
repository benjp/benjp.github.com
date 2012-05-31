var sidebarNavTpl;
$.get('tpl/sidebar-nav.mustache', function(templ) { sidebarNavTpl = templ; });

var navCollapseTpl;
$.get('tpl/nav-collapse.mustache', function(templ) { navCollapseTpl = templ; });
