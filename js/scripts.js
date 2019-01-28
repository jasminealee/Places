function Places() {
  this.destinations = [],
  this.currentId = 0
}

Places.prototype.addDestination = function(destination) {
  destination.id = this.assignId();
  this.destinations.push(destination);
}

Places.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Places.prototype.findDestination = function(id) {
  for (var i=0; i< this.destinations.length; i++) {
      if (this.destinations[i].id == id) {
        return this.destinations[i];
      }
  };
  return false;
}

Places.prototype.deleteDestination = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
      if (this.contacts[i].id == id) {
        this.destinations.splice(i, 1);
        return true;
      }
  };
  return false;
}

Places.prototype.printDestinations = function() {
  var destArray = [];
  this.destinations.forEach(function(destination){
    var result = "";
    result += destination.myLocation + ", ";
    result += destination.myLandmarks + ", ";
    result += destination.myTimeOfYear + ", ";
    result += destination.myNotes;
    destArray.push(result);
  });
  return destArray;
}

function Destination(location, landmarks, timeOfYear, notes) {
  this.myLocation = location,
  this.myLandmarks= landmarks,
  this.myTimeOfYear = timeOfYear,
  this.myNotes = notes
}

var travelBook = new Places();

$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();
    var inputLocation = $("input#location").val();
    var inputLandmark = $("input#landmark").val();
    var inputTimeOfYear = $("input#timeOfYear").val();
    var inputNotes = $("input#notes").val();
    var newDest = new Destination(inputLocation, inputLandmark, inputTimeOfYear, inputNotes);
    travelBook.addDestination(newDest);
  })

  $("#button2").click(function(event) {
    event.preventDefault();
    $("#show-dest").html("");
    //travels = travelBook.printDestinations();
    travelBook.printDestinations.forEach(function(destination){
      $("#show-dest").append("<p>" + destination + "</p>");
    });
    $("#show-dest").show();
  })
})
