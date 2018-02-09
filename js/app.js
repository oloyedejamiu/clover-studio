$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  console.log("document is ready");

  $(".navbar-nav").clone().prependTo("#off-canvas");

  $(function() {
    $(document).trigger("enhance");
  });

  // document ready  
});

$(window).load(function() {
  // executes when complete page is fully loaded, including all frames, objects and images
  console.log("window is loaded");

  // window load  
});