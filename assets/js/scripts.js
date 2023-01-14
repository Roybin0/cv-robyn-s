// Initialize and add the map
function initMap() {
    
    var pos = {
        lat: 46.619261, 
        lng: -33.134766
    }
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3, 
        center: pos,
    });

    var marker = new google.maps.Marker({
        position: pos,
        map: map,
    })
  };
  
  window.initMap = initMap;
