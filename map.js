
async function initMap() {    
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 0, lng: -180 },
      mapTypeId: "terrain",
      mapId: 'MOTO_MAP'
  });   

  const pin = new google.maps.marker.PinElement({
      scale: 1.5,
      background: "FBBC04"
  });
  
  fetch('../PanAmericaGPS.gpx')
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(doc => {
          var points = [];
          var bounds = new google.maps.LatLngBounds();
          const nodes = [...doc.getElementsByTagName('trkpt')];

          nodes.forEach(node => {
              var lat = node.getAttribute("lat");
              var lon = node.getAttribute("lon");
              var p = new google.maps.LatLng(lat, lon);
              points.push(p);
              bounds.extend(p);
              // const marker = new google.maps.marker.AdvancedMarkerElement({
              //                   map,
              //                   position: p.position,
              //                   content: pin.element
              // });
          });

          var poly = new google.maps.Polyline({
              path: points,
              strokeColor: "#0000FF",
              strokeOpacity: 1,
              strokeWeight: 4
          });
          poly.setMap(map);
          // fit bounds to track
          map.fitBounds(bounds);
      });
}