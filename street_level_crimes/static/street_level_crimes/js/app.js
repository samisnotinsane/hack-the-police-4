/*
 * App level, global js script.
 * DATE: 15 Sept. 2019
 */

  // DOM Ready Callback
  $( document ).ready(function() {
    // Handler for .ready() called.
    console.log("READY - app.js is working")
  });

// Arc GIS Map init
require([
  "esri/WebMap",
  "esri/views/MapView"
], function(WebMap, MapView) {

  var webmap = new WebMap({
    portalItem: {
      id: "41281c51f9de45edaf1c8ed44bb10e30"
    }
  });

  var view = new MapView({
    container: "viewDiv",
    map: webmap
  });
  
});