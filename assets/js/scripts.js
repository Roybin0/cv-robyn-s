function initMap() {
    var pos = {
        lat: 46.619261, 
        lng: -33.134766
    }
    
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3, 
        center: pos,
    });

    var labels = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; 

    var locations = [
        { lat: 52.33692285626292, lng: -6.464435395543945 },
        { lat: 53.28012699325383, lng: -6.217899522255471 },
        { lat: 53.31878308171093, lng: -6.2127451169411 },
        { lat: 53.27353720269368, lng: -6.210513519129819 }, 
        { lat: 53.27410429143661, lng: -9.049605099530229 }
    ]; 

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location, 
            label: labels[i % labels.length]
        });
    });

    var markerClusterer = new MarkerClusterer( map, markers, 
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
};
