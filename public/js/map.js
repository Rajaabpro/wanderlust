document.addEventListener('DOMContentLoaded', function() {
  console.log("Map token:", mapToken);
  console.log("Mapbox GL available:", typeof mapboxgl);
  console.log("Map container exists:", document.getElementById('map'));

  if (!mapToken) {
    console.error("Map token is missing!");
  } else if (typeof mapboxgl === 'undefined') {
    console.error("Mapbox GL JS is not loaded!");
  } else if (!document.getElementById('map')) {
    console.error("Map container not found!");
  } else {
    mapboxgl.accessToken = mapToken;
    
    const map = new mapboxgl.Map({
      container: "map", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: listingCoordinates || [77.209, 28.6139], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
    
    map.on('load', function() {
      console.log("Map loaded successfully!");
    });
    
    map.on('error', function(e) {
      console.error("Map error:", e);
    });
  }
});

const marker = new mapboxgl.Marker()
  .setLngLat(listingCoordinates)
  .addTo(map);
