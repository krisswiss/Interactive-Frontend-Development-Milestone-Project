      var map, places, infoWindow;
      var markers = [];
      var autocomplete;
      var countryRestrict = {'country': [] };
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      var hostnameRegexp = new RegExp('^https?://.+?/');

      var countries = {
          'at': {
          center: {lat: 47.5, lng: 14.5},
          zoom: 6
        },
          'be': {
          center: {lat: 50.5, lng: 4.5},
          zoom: 7
        },
          'cz': {
          center: {lat: 49.8, lng: 15.5},
          zoom: 6
        },
          'fr': {
          center: {lat: 46.2, lng: 2.2},
          zoom: 5
        },
          'de': {
          center: {lat: 51.2, lng: 10.4},
          zoom: 5
        },
          'gr': {
          center: {lat: 39.1, lng: 21.8},
          zoom: 6
        },
          'it': {
          center: {lat: 41.9, lng: 12.6},
          zoom: 5
        },
          'ie': {
          center: {lat: 53.4, lng: -8.2},
          zoom: 7
        },
          'nl': {
          center: {lat: 52.1, lng: 5.3},
          zoom: 7
        },
          'pl': {
          center: {lat: 51.9, lng: 19.1},
          zoom: 5
        },
          'pt': {
          center: {lat: 39.4, lng: -8.2},
          zoom: 7
        },
          'sk': {
          center: {lat: 48.7, lng: 19.7},
          zoom: 6
        },
          'es': {
          center: {lat: 40.5, lng: -3.7},
          zoom: 5
        },
      };

      function initMap() {
        $("#artGallery").prop("checked", true);
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: countries['ie'].center,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          streetViewControl: false,
        });

        infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });

        // Create the autocomplete object and associate it with the UI input control.
        // Restrict the search to the default country, and to place type "cities".
        autocomplete = new google.maps.places.Autocomplete(
            /** @type {!HTMLInputElement} */ (
                document.getElementById('autocomplete')), {
              types: ['(cities)'],
              componentRestrictions: countryRestrict
            });
        places = new google.maps.places.PlacesService(map);

        autocomplete.addListener('place_changed', onPlaceChanged);
        document.getElementById('artGallery').addEventListener('change', searchArtGallery);
        document.getElementById('movieTheatre').addEventListener('change', searchMovieTheatre);
        document.getElementById('museum').addEventListener('change', searchMuseum);
        document.getElementById('library').addEventListener('change', searchLibrary);

        // Add a DOM event listener to react when the user selects a country.
        document.getElementById('findMe').addEventListener('click', findMe);
        document.getElementById('country').addEventListener('change', setAutocompleteCountry);
        document.getElementById('reset').addEventListener('click', setAutocompleteCountry);
      }

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
        if ($("#artGallery").is(':checked')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          searchArtGallery();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }
      else if ($("#movieTheatre").is(':checked')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          searchMovieTheatre();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }
      else if ($("#museum").is(':checked')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          searchMuseum();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
      }
      else if ($("#library").is(':checked')) {
        var place = autocomplete.getPlace();
        if (place.geometry) {
          map.panTo(place.geometry.location);
          map.setZoom(15);
          searchLibrary();
        } else {
          document.getElementById('autocomplete').placeholder = 'Enter a city';
        }
       }
      }

    
      // Search for Art Galleries in the selected city, within the viewport of the map.
      function searchArtGallery() {
        var search = {
          bounds: map.getBounds(),
          types: ['art_gallery']
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each Gallery found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks a Gallery marker, show the details of that Gallery
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }

      // Search for Movie Theatres in the selected city, within the viewport of the map.
      function searchMovieTheatre() {
        var search = {
          bounds: map.getBounds(),
          types: ['movie_theater']
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each Movie Theatre found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks Movie Theatre marker, show the details of that Theatre
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }

      // Search for Museums in the selected city, within the viewport of the map.
      function searchMuseum() {
        var search = {
          bounds: map.getBounds(),
          types: ['museum']
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each Museum found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks Museum marker, show the details of that Museum
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }

      // Search for Libraries in the selected city, within the viewport of the map.
      function searchLibrary() {
        var search = {
          bounds: map.getBounds(),
          types: ['library']
        };

        places.nearbySearch(search, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearResults();
            clearMarkers();
            // Create a marker for each Library found, and
            // assign a letter of the alphabetic to each marker icon.
            for (var i = 0; i < results.length; i++) {
              var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
              var markerIcon = MARKER_PATH + markerLetter + '.png';
              // Use marker animation to drop the icons incrementally on the map.
              markers[i] = new google.maps.Marker({
                position: results[i].geometry.location,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
              });
              // If the user clicks Library marker, show the details of that Library
              // in an info window.
              markers[i].placeResult = results[i];
              google.maps.event.addListener(markers[i], 'click', showInfoWindow);
              setTimeout(dropMarker(i), i * 100);
              addResult(results[i], i);
            }
          }
        });
      }
      
      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      }

      // Set the country restriction based on user input.
      // Also center and zoom the map on the given country.
      function setAutocompleteCountry() {
        var country = document.getElementById('country').value;
        if (country == 'all') {
          autocomplete.setComponentRestrictions({'country': []});
          map.setCenter({lat: 15, lng: 0});
          map.setZoom(2);
        } else {
          autocomplete.setComponentRestrictions({'country': country});
          map.setCenter(countries[country].center);
          map.setZoom(countries[country].zoom);
        }
        clearResults();
        clearMarkers();
      }

      function dropMarker(i) {
        return function() {
          markers[i].setMap(map);
        };
      }

      // Results table
      function addResult(result, i) {
        var results = document.getElementById('results');
        var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
        var markerIcon = MARKER_PATH + markerLetter + '.png';

        var tr = document.createElement('tr');
        tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
        tr.onclick = function() {
          google.maps.event.trigger(markers[i], 'click');
        };

        var iconTd = document.createElement('td');
        var nameTd = document.createElement('td');
        var icon = document.createElement('img');
        icon.src = markerIcon;
        icon.setAttribute('class', 'placeIcon');
        icon.setAttribute('className', 'placeIcon');
        var name = document.createTextNode(result.name);
        iconTd.appendChild(icon);
        nameTd.appendChild(name);
        tr.appendChild(iconTd);
        tr.appendChild(nameTd);
        results.appendChild(tr);
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

      // Get details for a place. Show the information in an info window,
      // anchored on the marker for the place that the user selected.
      function showInfoWindow() {
        var marker = this;
        places.getDetails({placeId: marker.placeResult.place_id},
            function(place, status) {
              if (status !== google.maps.places.PlacesServiceStatus.OK) {
                return;
              }
              infoWindow.open(map, marker);
              buildIWContent(place);
            });
      }

      // Load the place information into the HTML elements used by the info window.
      function buildIWContent(place) {
        document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
            'src="' + place.icon + '"/>';
        document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
            '">' + place.name + '</a></b>';
        document.getElementById('iw-address').textContent = place.vicinity;

        if (place.formatted_phone_number) {
          document.getElementById('iw-phone-row').style.display = '';
          document.getElementById('iw-phone').textContent =
              place.formatted_phone_number;
        } else {
          document.getElementById('iw-phone-row').style.display = 'none';
        }

        // Assign a five-star rating to the hotel, using a black star ('&#10029;')
        // to indicate the rating the hotel has earned, and a white star ('&#10025;')
        // for the rating points not achieved.
        if (place.rating) {
          var ratingHtml = '';
          for (var i = 0; i < 5; i++) {
            if (place.rating < (i + 0.5)) {
              ratingHtml += '&#10025;';
            } else {
              ratingHtml += '&#10029;';
            }
          document.getElementById('iw-rating-row').style.display = '';
          document.getElementById('iw-rating').innerHTML = ratingHtml;
          }
        } else {
          document.getElementById('iw-rating-row').style.display = 'none';
        }

        // The regexp isolates the first part of the URL (domain plus subdomain)
        // to give a short URL for displaying in the info window.
        if (place.website) {
          var fullUrl = place.website;
          var website = hostnameRegexp.exec(place.website);
          if (website === null) {
            website = 'http://' + place.website + '/';
            fullUrl = website;
          }
          document.getElementById('iw-website-row').style.display = '';
          document.getElementById('iw-website').textContent = website;
        } else {
          document.getElementById('iw-website-row').style.display = 'none';
        }
      }

        // Functio RESET to clear selection and reset the map to initMap state
        function reset() {
         clearResults();
         clearMarkers();
         $('#country')[0].selectedIndex = 0;
         $("#autocomplete").val("");
         $('#results-heading').html("");
         map.setZoom(2);
         map.setCenter(countries["ie"].center);
         map.componentRestrictions = { 'country': [] };
         place = "";
         $("#artGallery").prop("checked", true);
        }


        // Function FIND ME to locate user
function findMe() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
            map.panTo(pos);
            map.setZoom(13);

            if ($("#artGallery").is(':checked')) {
            searchArtGallery();
            } else if ($("#movieTheatre").is(':checked')) {
            searchMovieTheatre();
            } else if ($("#museum").is(':checked')) {
            searchMuseum();
            } else if ($("#library").is(':checked')) {
            searchLibrary();
            }

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}