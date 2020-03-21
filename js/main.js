// to initialize map
var map;
      
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 54.8, lng: -4.6},
          zoom: 2
        });
      }




/* 2nd autocomplete 

to autocomplete Search field
var autocompleteSearchField;
var places;

autocompleteSearchField = new google.maps.places.autocompleteSearchField((
    document.getElementById('enterCity')), {
        types: ['(cities)'],
    }
); 
places = new google.maps.places.PlacesService(map);
*/


/* youtube tutorial autocomplete cities using google places api - 1st approach 
function enterCityAutocomplete(){
    var input = document.getElementById('enterCity');
    var autocomplete = new.google.maps.places.Autocomplete(input);
} */