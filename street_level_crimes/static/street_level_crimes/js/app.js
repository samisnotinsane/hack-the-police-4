// App level, global js script
console.log("app.js is working")


// Arc GIS Map init
require([
    "esri/WebMap",
    "esri/views/MapView",
  ], function(WebMap, MapView) {

    var map = new WebMap({
        portalItem: {
          id: "211c0a6c69b7453b824e6ca8e05e7e20"
        }
      });

      //*** ADD ***//
      var view = new MapView({
        container: "viewDiv",
        map: map
      });

  });