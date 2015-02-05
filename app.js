$(function (){
// Nav Bar Waypoints & Highlighting
  var waypoint = new Waypoint({
    element: $('#landing-page-image'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"", "color": ""});
      $('#link-artists').css({"font-family":"", "color": ""});
      $('#link-projects').css({"font-family":"", "color": ""});
      $('#link-news').css({"font-family":"", "color": ""});
      $('#link-inspiration').css({"font-family":"", "color": ""});
      $('#link-contact').css({"font-family":"", "color": ""});
      $('#link-shop').css({"font-family":"", "color": ""});
      $('#right-side-circle-container').css({"visibility": "hidden"});
      $('#nav-bar').css({"position": "", "top": ""});
    },
    offset: '-25%'
  });
  var waypoint = new Waypoint({
    element: $('#about'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
      $('#link-artists').css({"font-family":"", "color": ""});
      $('#link-projects').css({"font-family":"", "color": ""});
      $('#link-news').css({"font-family":"", "color": ""});
      $('#link-inspiration').css({"font-family":"", "color": ""});
      $('#link-contact').css({"font-family":"", "color": ""});
      $('#link-shop').css({"font-family":"", "color": ""});
      $('#right-side-circle-container').css({"visibility": "visible"});
      if (direction == "down"){
        $('#nav-bar').css({"position": "fixed", "top": "0", "padding-bottom": "0px"});
      };
      if (direction == "up"){
        $('#nav-bar').css({"position": "", "top": "", "padding-bottom": ""});
        $('about').css({"font-family": "", "color": ""})
      } 
    }
  });
  var waypoint = new Waypoint({
    element: $('#artists'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"", "color": ""});
      $('#link-artists').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
      $('#link-projects').css({"font-family":"", "color": ""});
      $('#link-news').css({"font-family":"", "color": ""});
      $('#link-inspiration').css({"font-family":"", "color": ""});
      $('#link-contact').css({"font-family":"", "color": ""});
      $('#link-shop').css({"font-family":"", "color": ""});
      if (direction == "up") {
        $('#link-about').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
        $('#link-artists').css({"font-family":"", "color": ""});
      }
    }
  });
  var waypoint = new Waypoint({
    element: $('#projects'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"", "color": ""});
      $('#link-artists').css({"font-family":"", "color": ""});
      $('#link-projects').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
      $('#link-news').css({"font-family":"", "color": ""});
      $('#link-inspiration').css({"font-family":"", "color": ""});
      $('#link-contact').css({"font-family":"", "color": ""});
      $('#link-shop').css({"font-family":"", "color": ""});
      if (direction == "up") {
        $('#link-artists').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
        $('#link-projects').css({"font-family":"", "color": ""});
      }
    }
  });
  var waypoint = new Waypoint({
    element: $('#news'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"", "color": ""});
      $('#link-artists').css({"font-family":"", "color": ""});
      $('#link-projects').css({"font-family":"", "color": ""});
      $('#link-news').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
      $('#link-inspiration').css({"font-family":"", "color": ""});
      $('#link-contact').css({"font-family":"", "color": ""});
      $('#link-shop').css({"font-family":"", "color": ""});
      if (direction == "up") {
        $('#link-projects').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
        $('#link-news').css({"font-family":"", "color": ""});
      }
    }
  });
  var waypoint = new Waypoint({
    element: $('#inspiration'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"", "color": ""});
      $('#link-artists').css({"font-family":"", "color": ""});
      $('#link-projects').css({"font-family":"", "color": ""});
      $('#link-news').css({"font-family":"", "color": ""});
      $('#link-inspiration').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
      $('#link-contact').css({"font-family":"", "color": ""});
      $('#link-shop').css({"font-family":"", "color": ""});
      if (direction == "up") {
        $('#link-news').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
        $('#link-inspiration').css({"font-family":"", "color": ""});
      }
    }
  });
  var waypoint = new Waypoint({
    element: $('#contact'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"", "color": ""});
      $('#link-artists').css({"font-family":"", "color": ""});
      $('#link-projects').css({"font-family":"", "color": ""});
      $('#link-news').css({"font-family":"", "color": ""});
      $('#link-inspiration').css({"font-family":"", "color": ""});
      $('#link-contact').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
      $('#link-shop').css({"font-family":"", "color": ""});
      if (direction == "up") {
        $('#link-inspiration').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
        $('#link-contact').css({"font-family":"", "color": ""});
      }
    }
  });
  var waypoint = new Waypoint({
    element: $('#shop'),
    handler: function(direction) {
      $('#link-about').css({"font-family":"", "color": ""});
      $('#link-artists').css({"font-family":"", "color": ""});
      $('#link-projects').css({"font-family":"", "color": ""});
      $('#link-news').css({"font-family":"", "color": ""});
      $('#link-inspiration').css({"font-family":"", "color": ""});
      $('#link-contact').css({"font-family":"", "color": ""});
      $('#link-shop').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
      if (direction == "up") {
        $('#link-contact').css({"font-family":"Oswald-Regular", "color": "#FFFFFF"});
        $('#link-shop').css({"font-family":"", "color": ""});
      }
    }
  });

// About Us Waypoints
  var waypoint = new Waypoint({
    element: $('#management-link'),
    handler: function(direction) {
      
      if (direction == "down"){
        $('#management-link').css({"color":"#5A5251"});
        $('#sound-prod-link').css({"color": ""});
        $('#event-prod-link').css({"color": ""});
        $('#brand-dev-link').css({"color": ""});
      };
    },
    offset: '10%'
  });
  var waypoint = new Waypoint({
    element: $('#sound-prod-link'),
    handler: function(direction) {
      if (direction == "down"){
        $('#sound-prod-link').css({"color":"#5A5251"});
        $('#management-link').css({"color": ""});
        $('#event-prod-link').css({"color": ""});
        $('#brand-dev-link').css({"color": ""});
      };
      if (direction == "up"){
        $('#management-link').css({"color": "#5A5251"});
        $('#sound-prod-link').css({"color": ""});
        $('#event-prod-link').css({"color": ""});
        $('#brand-dev-link').css({"color": ""});
      } 
    },
    offset: '10%'
  });
  var waypoint = new Waypoint({
    element: $('#event-prod-link'),
    handler: function(direction) {
      if (direction == "down"){
        $('#event-prod-link').css({"color":"#5A5251"});
        $('#management-link').css({"color": ""});
        $('#sound-prod-link').css({"color": ""});
        $('#brand-dev-link').css({"color": ""});
      };
      if (direction == "up"){
        $('#sound-prod-link').css({"color": "#5A5251"});
        $('#management-link').css({"color": ""});
        $('#event-prod-link').css({"color": ""});
        $('#brand-dev-link').css({"color": ""});
      } 
    },
    offset: '10%'
  });
  var waypoint = new Waypoint({
    element: $('#brand-dev-link'),
    handler: function(direction) {
      if (direction == "down"){
        $('#brand-dev-link').css({"color":"#5A5251"});
        $('#management-link').css({"color": ""});
        $('#sound-prod-link').css({"color": ""});
        $('#event-prod-link').css({"color": ""});
      };
    },
    offset: '10%'
  });

// Video YouTube Link Mouseover
  $(".INSPIRATION-shadow-container").mouseenter(function (e) {
    $target = $(e.target);
    $target.prev().css({"display": "block"});
  });

  $('.INSPIRATION-play').mouseleave(function(e){
    $(e.target).css({"display": "none"});
  });
});