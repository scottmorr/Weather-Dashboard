//4c977f45a07a9d54331ea1e40d5a5185	weather API

$(document).ready(function () {


    var currentDay = moment().format('LL');
    $("#currentDay").append(currentDay);
 

  // $(currentCity).text("Current City");   Doesn't work


  $(".card-text").text("Next Day");
    // var APIKey = "4c977f45a07a9d54331ea1e40d5a5185";
    // var queryURL

    // //https://openweathermap.org/appid


    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     // $("#query-input").text(JSON.stringify(response));

      
    //   });






});