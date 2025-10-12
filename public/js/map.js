document.addEventListener('DOMContentLoaded', function() {
  console.log("Map token:", mapToken);
  console.log("Mapbox GL available:", typeof mapboxgl);
  console.log("Map container exists:", document.getElementById('map'));
  console.log("Listing coordinates:", listingCoordinates);

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
      style: "mapbox://styles/mapbox/satellite-v9", // style URL
      center: listingCoordinates || [77.209, 28.6139], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
    
    map.on('load', function() {
      console.log("Map loaded successfully!");
      
      // Create marker only if coordinates exist
      if (listingCoordinates && listingCoordinates.length === 2) {
        const marker = new mapboxgl.Marker()
          .setLngLat(listingCoordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML(`<h3>${listingTitle || 'Listing'}</h3>`)
          )
          .addTo(map);
        console.log("Marker added at:", listingCoordinates);
      } else {
        console.error("Invalid coordinates for marker:", listingCoordinates);
      }
    });
    
    map.on('error', function(e) {
      console.error("Map error:", e);
    });
  }
});
