$(document).ready(function() {
  // loading the descriptions of the services

  // Documents
  $("#Letter-of-Accommodation").load("../../txtFiles/letterOfAccommodation.txt");
  $("#Verification-of-Illness").load("../../txtFiles/verificationOfIllness.txt");
  $("#Accommodation-Renewal").load("../../txtFiles/accommodationRenewal.txt");

  // Notes
  $("#Volunteer").load("../../txtFiles/volunteer.txt");
  $("#Upload-Notes").load("../../txtFiles/uploadNotes.txt");
  $("#Request-Note-Taking").load("../../txtFiles/requestNotetaking.txt");

  // Counsellors
  $("#Adaptive-Technologist").load("../../txtFiles/adaptiveTechnologist.txt");
  $("#Learning-Strategist").load("../../txtFiles/learningStrategist.txt");
  $("#Accessibility-Advisor").load("../../txtFiles/accessibilityAdvisor.txt");

  // Test and Exam Accommodation
  $("#Late-Request").load("../../txtFiles/lateAccommodation.txt");
  $("#Request").load("../../txtFiles/onTimeAccommodation.txt");
  $("#Information").load("../../txtFiles/examAccommodationDeadlines.txt");

  //Building accessibility
  $("#Gender-Neutral-Washrooms").load("../../txtFiles/genderNeutralWashrooms.txt");
  $("#Wheelchair-Entrance-Map").load("../../txtFiles/wheelEntranceMap.txt");
  $("#Elevator-Map").load("../../txtFiles/elevatorMap.txt");


  //get the name of the category
  var categoryName = GetURLParameter('category');

  $.ajax({
    url: 'http://localhost:3030/category/load/' + categoryName,
    method: 'GET',
    contentType: "application/json",
    success: function(data) {
      var category = new Object();
      category.nodes  = data.nodes;
      category.edges = data.edges;

      //functions to build graph (arborjs)
      var sys = arbor.ParticleSystem(10000, 400, 1);
      sys.parameters({repulsion: 10000, gravity: true, dt: 0.35});
      sys.renderer = Renderer("#viewport");
      sys.graft(category);
    }
  })


  var subCat = GetURLParameter('subcategory');
  if (subCat == "letter"){
    subCat = "Letter-of-Accommodation";
  }
  if (subCat == "verify"){
    subCat = "Verification-of-Illness";
  }
  if (subCat == "renewal"){
    subCat = "Accommodation-Renewal"
  }

  if (subCat == "volunteer"){
    subCat = "Volunteer";
  }
  if (subCat == "upload"){
    subCat = "Upload-Notes";
  }
  if (subCat == "notesrequest"){
    subCat = "Request-Note-Taking";
  }

  if (subCat == "adaptive"){
    subCat = "Adaptive-Technologist";
  }
  if (subCat == "learning"){
    subCat = "Learning-Strategist";
  }
  if (subCat == "advisor"){
    subCat = "Accessibility-Advisor";
  }

  if (subCat == "late"){
    subCat = "Late-Request";
  }
  if (subCat == "request"){
    subCat = "Request";
  }
  if (subCat == "info"){
    subCat = "Information";
  }

  if (subCat == "washrooms"){
    subCat = "Gender-Neutral-Washrooms";
  }
  if (subCat == "wheelchair"){
    subCat = "Wheelchair-Entrance-Map";
  }
  if (subCat == "elevator"){
    subCat = "Elevator-Map";
  }

  var service = document.getElementById(subCat);
  // console.log(subCat);
  service.style.display = "block";


  // adopted from http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
  function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++){
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
  }

});
