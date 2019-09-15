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
var map;
require([
  "esri/map", "esri/geometry/Point", 
  "esri/symbols/SimpleMarkerSymbol", "esri/graphic",
  "dojo/_base/array", "dojo/dom-style", "dojox/widget/ColorPicker", 
  "dojo/domReady!"
], function(
  Map, Point,
  SimpleMarkerSymbol, Graphic,
  arrayUtils, domStyle, ColorPicker
) {

  map = new Map("map",{
    basemap: "oceans",
    center: [0.1278,51.5074],
    zoom: 10,
    minZoom: 2
  });
  
  map.on("load", mapLoaded);

  function mapLoaded(){
    var points = [[0.1278,51.5074],[1.1278,51.6074],];
    // var points1 = require('/forms4.json');
    var points1 = [[0.1278,51.5074],[0.4,51.3],[0.4278,51.5074],[0.8,41.3]]; 
    var iconPath = "M6 12438 c51 -299 211 -822 382 -1248 337 -838 821 -1690 1421 -2500 294 -396 604 -769 990 -1190 776 -845 1683 -1782 2901 -2993 l873 -869 481 481 c439 439 484 481 514 481 36 0 79 -19 130 -58 l33 -25 -50 -51 -51 -51 58 -65 c1009 -1131 1627 -1803 2257 -2455 380 -393 457 -486 800 -965 375 -523 487 -642 741 -784 90 -50 296 -136 327 -136 6 0 231 219 500 488 l487 487 -2150 2150 c-2045 2045 -2151 2149 -2167 2132 -17 -16 -170 135 -3153 3116 -2148 2147 -3167 3159 -3237 3215 -339 268 -745 489 -1182 643 -274 97 -623 187 -868 223 l-43 6 6 28z";
    var initColor = "#000000";
    var iconPath2 = "M20.232,5.5V12c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V2.5h-3V11c0,0.276-0.224,0.5-0.5,0.5   c-0.276,0-0.5-0.224-0.5-0.5V1.5h-3V11c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V3.5h-3V16l-2.025-2.771   c-0.6-0.925-1.771-1.235-2.629-0.705c-0.855,0.542-1.067,1.724-0.475,2.646c0,0,3.266,4.943,4.658,7.059S11.408,26,15.625,26   c6.982,0,7.607-5.392,7.607-7s0-13.5,0-13.5H20.232z";
    var initColor2 = "#000000";
    arrayUtils.forEach(points1, function(point) {
      var graphic2 = new Graphic(new Point(point), createSymbol(iconPath2, initColor2));
      map.graphics.add(graphic2);
    });
    
    arrayUtils.forEach(points, function(point) {
      var graphic = new Graphic(new Point(point), createSymbol(iconPath, initColor));
      map.graphics.add(graphic);
    });
    
    var colorPicker = new ColorPicker({}, "picker1");
    colorPicker.setColor(initColor);
    domStyle.set(colorPicker, "left", "500px");
    colorPicker.on("change", function(){
      var colorCode = this.hexCode.value;
      map.graphics.graphics.forEach(function(graphic){
        graphic.setSymbol(createSymbol(iconPath, colorCode));
      });
    });
  }
  
  function createSymbol(path, color){
    var markerSymbol = new esri.symbol.SimpleMarkerSymbol();
    markerSymbol.setPath(path);
    markerSymbol.setColor(new dojo.Color(color));
    markerSymbol.setOutline(null);
    return markerSymbol;
  }
});
