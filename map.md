---
layout: page
title: Map
permalink: /map/
---
A map of my travels

<html>
  <head>
    <title>Add Map</title>
    <link rel="shortcut icon" href="#" />
    <script src="https://cdn.maptiler.com/maptiler-sdk-js/v3.9.0/maptiler-sdk.umd.min.js"></script>
    <link href="https://cdn.maptiler.com/maptiler-sdk-js/v3.9.0/maptiler-sdk.css" rel="stylesheet" />
    <style type="text/css">
      #map {
        height: 500px;
        width: 100%;
      }
    </style>
  </head>
  <body>
    <!--The div element for the map -->
    <div id="map"></div>
    <script>
      maptilersdk.config.apiKey = 'jwUip4YQ256puKbY1jYB';
      const map = new maptilersdk.Map({
        container: 'map', // container's id or the HTML element to render the map
        style: maptilersdk.MapStyle.HYBRID,
        center: [295.550343, -17.665957], // starting position [lng, lat]
        zoom: 2.5, // starting zoom
      });
      map.on('load', async function () {
        await maptilersdk.helpers.addPolyline(map, {
          data: '../PanAmericaGPS.gpx',
          outline: false,
          lineColor: "#0000FF"
        });
      });
    </script>
  </body>
</html>