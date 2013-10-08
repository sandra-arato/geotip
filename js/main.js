var x=$("#container");
function getLocation()
  {
    console.log("where is should be");
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
  else{console.log("Geolocation is not supported by this browser.");}
  }

function showPosition(position)
  {
  var latlon=position.coords.latitude+","+position.coords.longitude;
  console.log("latlon");

  var locationObject="http://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlon + "&sensor=true_or_false";

  console.log(locationObject);
  }

function showError(error)
  {
  switch(error.code) 
    {
    case error.PERMISSION_DENIED:
      console.log("User denied the request for Geolocation.")
      break;
    case error.POSITION_UNAVAILABLE:
      console.log("Location information is unavailable.")
      break;
    case error.TIMEOUT:
      console.log("The request to get user location timed out.")
      break;
    case error.UNKNOWN_ERROR:
      console.log("An unknown error occurred.")
      break;
    }
  }

function initialise() {
  console.log("initalisation started...");
  getLocation();
 
}

$(document).ready(initialise);
