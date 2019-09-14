// App level, global js script
console.log("app.js is working")


// Arc GIS Map init
require([
    "esri/Map",
    "esri/views/MapView",
  ], function(Map, MapView) {

    var map = new Map({
      basemap: "topo"
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-0.11, 51.5],
      zoom: 12
    });

  });