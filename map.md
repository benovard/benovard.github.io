---
layout: page
title: Map
permalink: /map/
customjs:
 - http://benovard.github.io/map.js
---
A map of my travels

<html>
  <head>
    <title>Add Map</title>
    <link rel="shortcut icon" href="#" />
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQeAFJAmmQ9NIqFtU78HuEL7BFydeqwFw&callback=initMap&libraries=drawing&v=weekly"
      defer
    ></script>
    <style type="text/css">
      #map {
        height: 500px;
        width: 100%;
      }
    </style>
    <script src="../map.js"></script>
  </head>
  <body>
    <!--The div element for the map -->
    <div id="map"></div>
  </body>
</html>