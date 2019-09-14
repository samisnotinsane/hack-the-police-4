// App level, global js script
console.log("app.js is working")

// Arc GIS Map init
require([
    "esri/Map",
    "esri/views/MapView",
  ], function(Map, MapView) {

    var map = new Map({
      basemap: "topo-vector"
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [-118.80543,34.02700],
      zoom: 13
    });

  });