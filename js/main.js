$(document).ready(function () {

  $('#main-container').html('&nbsp;');

  $.get('html/sidebar.html', function(data) {
    $('#sidebar-categories').html(data);
  });

  $('#twtr-widget-1').css({"display":"none"});
  $('#disqus_thread').css({"display":"none"});
    
});

var curCat, curType, id;

$.address.change(function(event){
  $('.nav li').removeClass('active');
  $('#disqus_thread').css({"display":"none"});

  // FRIENDLY SEO URL SUPPORT
  var burl = $.url();
  var urlParam = burl.param("_escaped_fragment_");
  if (typeof urlParam != 'undefined') {
    if (urlParam.indexOf('article')===0) {
      id = urlParam.substring(urlParam.indexOf("_")+1);
      window.location.href = 'contents/'+id+'.html';
    }
  }
  // / FRIENDLY SEO URL SUPPORT
  
  var anchor = event.value.substring(1);
  if (anchor==="") anchor = "index";
  var url = 'html/index.html';

  if (anchor.indexOf('article')===0) {   //eg. anchor.startsWith('article')
    id = anchor.substring(anchor.indexOf("_")+1);
    url = 'contents/'+id+'.html';

    $.doTimeout(2000,function() {
      if (typeof DISQUS != 'undefined') {
        DISQUS.reset({
          reload: true,
          config: function () {
            this.page.identifier = "article"+id;
            this.page.url = "http://benjp.github.com/article.html?id="+id;
          }
        });
        $('#disqus_thread').css({"display":"block"});
      }
    });

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
