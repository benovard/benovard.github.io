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
    <script>
        function initMap() {    
            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: { lat: 0, lng: -180 },
                mapTypeId: "terrain",
            });   
            fetch('../PanAmericaGPS.gpx')
                .then(response => response.text())
                .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
                .then(doc =>
                {
                    var points = [];
                    var bounds = new google.maps.LatLngBounds();
                    const nodes = [...doc.getElementsByTagName('trkpt')];
                    nodes.forEach(node =>
                    {
                        var lat = node.getAttribute("lat");
                        var lon = node.getAttribute("lon");
                        var p = new google.maps.LatLng(lat, lon);
                        points.push(p);
                        bounds.extend(p);
                    })
                    var poly = new google.maps.Polyline({
                             path: points,
                             strokeColor: "#0000FF",
                             strokeOpacity: 1,
                             strokeWeight: 4
                        });
                        poly.setMap(map);
                        // fit bounds to track
                        map.fitBounds(bounds);
                })
        }
    </script>
  </head>
  <body>
    <!--The div element for the map -->
    <div id="map"></div>
  </body>
</html>