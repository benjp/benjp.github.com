// Let's put some data here
	
var categories = TAFFY([
      {"id": "1", "type": "category", "title": "eXo", "href": "#category_eXo"},
      {"id": "2", "type": "category", "title": "Java", "href": "#category_Java"},
      {"id": "3", "type": "category", "title": "Juzu", "href": "#category_Juzu"},
      {"id": "4", "type": "category", "title": "WCM", "href": "#category_WCM"},
      {"id": "5", "type": "category", "title": "HTML5", "href": "#category_HTML5"},
      {"id": "6", "type": "category", "title": "OSX", "href": "#category_OSX"},
      {"id": "101", "type": "tag", "title": "Dev", "href": "#tag_Dev", "weight": "4"},
      {"id": "102", "type": "tag", "title": "effect", "href": "#tag_effect", "weight": "2"},
      {"id": "103", "type": "tag", "title": "eXo", "href": "#tag_eXo", "weight": "4"},
      {"id": "104", "type": "tag", "title": "FlipBoard", "href": "#tag_FlipBoard", "weight": "2"},
      {"id": "105", "type": "tag", "title": "Juzu", "href": "#tag_Juzu", "weight": "2"},
      {"id": "106", "type": "tag", "title": "Lazy", "href": "#tag_Lazy", "weight": "1"},
      {"id": "107", "type": "tag", "title": "OSX", "href": "#tag_OSX", "weight": "1"},
      {"id": "108", "type": "tag", "title": "Template", "href": "#tag_Template", "weight": "2"},
      {"id": "109", "type": "tag", "title": "Tutorial", "href": "#tag_Tutorial", "weight": "2"},
      {"id": "110", "type": "tag", "title": "video", "href": "#tag_video", "weight": "1"},
      {"id": "111", "type": "tag", "title": "WCM", "href": "#tag_WCM", "weight": "3"},
      {"id": "112", "type": "tag", "title": "Youtube", "href": "#tag_Youtube", "weight": "1"}
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
      "categories": ["6", "106", "107"]
    },
    {
      "id": "6",
      "title": "Add QRCode in your Website using Juzu (p.2)",
      "desc": "We saw in the first part of this post how easy it is to create a QRCode portlet using Juzu. Now, let’s finish the job and add a Portlet Preference to configure the QRCode size",
      "categories": ["2", "3", "101", "105", "109"]
    },
    {
      "id": "5",
      "title": "Add QRCode in your Website using Juzu (p.1)",
      "desc": "This post is about two things : - Showing how easy it is to create a portlet using Juzu (I hope Julien won’t be upset about my way of taking it  )- Adding QRCode in your website.",
      "categories": ["2", "3", "4", "101", "103", "105"]
    },
    {
      "id": "4",
      "title": "FlipFeed effect tutorial on eXo Platform 3.5",
      "desc": "A few months ago, I did a FlipFeed demo. Now is the time to write a short tutorial to see how to create it on eXo Platform 3.5.",
      "categories": ["1", "2", "4", "102", "103", "104", "109", "111"]
    },
    {
      "id": "3",
      "title": "How to add Youtube Content in 5 min ?",
      "desc": "Sometimes, as we support mpg, mov, h264 videos in eXo Platform, this question pops up during demos : « Do you support Youtube videos ? » And I can only answer we don’t have this « Content Type » in the default bundle.",
      "categories": ["1", "4", "101", "103", "108", "110", "111", "112"]
    },
    {
      "id": "2",
      "title": "FlipBoard effect in eXo WCM",
      "desc": "Easy way to add a FlipBoard like effect in eXo WCM using Thumbnail Rest service.",
      "categories": ["2", "101", "102", "103", "104", "108", "111"]
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
      {"type": 2, "title": "julienviet.com", "href": "http://www.julienviet.com/"}
	]);
	