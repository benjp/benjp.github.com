// Let's put some data here
	
var categories = TAFFY([
      {"id": "1", "title": "eXo", "href": "#category_eXo"},
      {"id": "2", "title": "Java", "href": "#category_Java"},
      {"id": "3", "title": "Juzu", "href": "#category_Juzu"},
      {"id": "4", "title": "WCM", "href": "#category_WCM"},
      {"id": "5", "title": "HTML5", "href": "#category_HTML5"},
      {"id": "6", "title": "OSX", "href": "#category_OSX"}
	]);	
	
var tags = TAFFY([
      {"id": "1", "title": "Dev", "href": "#tag_Dev", "articles": ["6", "5", "3", "2"]},
      {"id": "2", "title": "effect", "href": "#tag_effect", "articles": ["4", "2"]},
      {"id": "3", "title": "eXo", "href": "#tag_eXo", "articles": ["5", "4", "3", "2"]},
      {"id": "6", "title": "Lazy", "href": "#tag_Lazy", "articles": ["7"]},
      {"id": "7", "title": "OSX", "href": "#tag_OSX", "articles": ["7"]},
      {"id": "8", "title": "Template", "href": "#tag_Template", "articles": ["3", "2"]},
      {"id": "9", "title": "Tutorial", "href": "#tag_Tutorial", "articles": ["6", "4"]},
      {"id": "10", "title": "video", "href": "#tag_video", "articles": ["3"]},
      {"id": "11", "title": "WCM", "href": "#tag_WCM", "articles": ["4", "3", "2"]},
      {"id": "12", "title": "Youtube", "href": "#tag_Youtube", "articles": ["3"]}
	]);	

var articles = TAFFY([
    {
      "id": "8",
      "title": "100% javascript based Personal Blog",
      "desc": "I'm done with wordpress, new updates every weeks, I want to create a 100% json based website since a long time, here's my solution...",
      "img": "http://1.bp.blogspot.com/_L9NUh3AMB6A/TPmSpddvoWI/AAAAAAAAAEc/E7_8QOftlzw/s1600/mustache_template.jpg",
      "categories": ["5"]
    },
    {
      "id": "7",
      "title": "How to « automator » your desktop for demos",
      "desc": "If like me you do a lot of demos, you probably know that we can’t usually do a professional demo with any background like this one...",
      "img": "img/horrible.jpg",
      "categories": ["6"]
    },
    {
      "id": "6",
      "title": "Add QRCode in your Website using Juzu (p.2)",
      "desc": "We saw in the first part of this post how easy it is to create a QRCode portlet using Juzu. Now, let’s finish the job and add a Portlet Preference to configure the QRCode size",
      "categories": ["2", "3"]
    },
    {
      "id": "5",
      "title": "Add QRCode in your Website using Juzu (p.1)",
      "desc": "This post is about two things : - Showing how easy it is to create a portlet using Juzu (I hope Julien won’t be upset about my way of taking it  )- Adding QRCode in your website.",
      "categories": ["2", "3", "4"]
    },
    {
      "id": "4",
      "title": "FlipFeed effect tutorial on eXo Platform 3.5",
      "desc": "A few months ago, I did a FlipFeed demo. Now is the time to write a short tutorial to see how to create it on eXo Platform 3.5.",
      "categories": ["1", "2", "4"]
    },
    {
      "id": "3",
      "title": "How to add Youtube Content in 5 min ?",
      "desc": "Sometimes, as we support mpg, mov, h264 videos in eXo Platform, this question pops up during demos : « Do you support Youtube videos ? » And I can only answer we don’t have this « Content Type » in the default bundle.",
      "categories": ["1", "4"]
    },
    {
      "id": "2",
      "title": "FlipBoard effect in eXo WCM",
      "desc": "Easy way to add a FlipBoard like effect in eXo WCM using Thumbnail Rest service.",
      "categories": ["2"]
    },
    {
      "id": "1",
      "title": "Hello",
      "desc": "Welcome to my blog (I finally decided to get my place to put stuff). You will find here mostly infos or tests about my work in eXo, but also some stuff I do when I don’t think about eXo Content.",
      "categories": ["0"]
    }
   ]);
   
var links = TAFFY([
      {"type": 1, "title": "GitHub", "href": "https://github.com/benjp"},
      {"type": 1, "title": "LinkedIn", "href": "http://www.linkedin.com/profile/view?id=63327682"},
      {"type": 1, "title": "Run Activity Feed", "href": "http://connect.garmin.com/feed/rss/activities?feedname=Garmin%20Connect%20-%20benjamin.paillereau&owner=benjamin.paillereau"},
      {"type": 1, "title": "Twitter", "href": "http://www.twitter.com/bpaillereau"},
      {"type": 1, "title": "Vimeo", "href": "http://www.vimeo.com/user1241097"},
      {"type": 2, "title": "tugdualgrall.blogspot", "href": "http://tugdualgrall.blogspot.com/"},
      {"type": 2, "title": "julienviet.com", "href": "http://www.julienviet.com/"},
	]);
	