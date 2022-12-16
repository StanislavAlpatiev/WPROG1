let map, infoWindow, watchId, myLatlng, marker;

//Create first render of map that is centered to users current geolocation.
//Add buttons that controll the watch function which updates the map according to user location and movement.
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: setCurrentLocationAsCenter(),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
  });
  infoWindow = new google.maps.InfoWindow();

  const locationStopWatchButton = document.createElement("button");
  locationStopWatchButton.textContent = "Stop Watch";
  locationStopWatchButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationStopWatchButton);
  locationStopWatchButton.addEventListener("click", () => {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
  });

  const locationWatchButton = document.createElement("button");
  locationWatchButton.textContent = "Start Watch";
  locationWatchButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationWatchButton);
  locationWatchButton.addEventListener("click", () => {
    createWatch();
  });
}

//Function sets updates map using the users current geolocation. 
function setCurrentLocationAsCenter() {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        
        marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          zIndex:1
        });

        infoWindow.setPosition(pos);
        //marker.setPosition(pos);
        infoWindow.setContent("You are here.");
        infoWindow.open(map);
        map.setCenter(pos);
        
      },
      () => {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  //navigator.geolocation.clearWatch(watchId);
}

//Callbackfunction used for createWatch().
//Updates the map based on userlocation when geolocation changes.
function success(pos) {
  var crd = pos.coords;

  const position = {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude,
  };

  infoWindow.setPosition(position);
  //marker.setPosition(pos);
  infoWindow.setContent("You are here.");
  infoWindow.open(map);
  map.setCenter(position);
  console.log('lat: ' + crd.latitude + " long: " + crd.longitude);
}

//Function used to log error message to console when geolocation function does not work.
function watchError(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

//Function creates a geolocation watch with options.
function createWatch() {
  let options = {
    enableHighAccuracy: true,
    timeout: 1000,
    maximumAge: 0
  };

  if(watchId == null) {
    watchId = navigator.geolocation.watchPosition(success, watchError, options);
  }
}

window.initMap = initMap;

createWatch();




