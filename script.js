

$(document).ready(function () {


 var currentDay = moment().format('LL');
 $("#addDate").append(currentDay);






  $('#search-button').on("click", function (event) {
    event.preventDefault();
    console.log("clicked");


    var searchValue = $("#search-value").val().trim();
    console.log(searchValue);
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=4c977f45a07a9d54331ea1e40d5a5185";

    function searchWeather() {
      $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "json",
      }).then(function(response) {
        console.log(response);
        var city = $("<div>");
        //start coding here look at using append or appendChild to make the weather facts appear
        
        $("#temp").text("Temperature:");
        $("#humidity").text("Humidity:");
        $("#windSpeed").text("Wind Speed:");
        $("#uvIndex").text("UV Index:");


      //   city.appendChild(`
      //    <h5>${searchValue}</h5>
      //    <h7>${response.main.temp}<h7>
        
        
      // `)
        
        
        
        
        city.textContent = searchValue;
      });
    };


    searchWeather(searchValue);
  });
});
    // //dont have a query input var query = $("#query-input").val().trim();

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function (response) {
    //   // $("#query-input").text(JSON.stringify(response));

    // });


    //});   // Examples of API calls:



    // `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`

    //var APIKey = "4c977f45a07a9d54331ea1e40d5a5185";
    // var queryURL


    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   }).then(function(response) {
    //     // $("#query-input").text(JSON.stringify(response));


    //   });








    // var APIKey = "4c977f45a07a9d54331ea1e40d5a5185";
    // var queryURL

    // //https://openweathermap.org/appid

    //City weather api
    //api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}


    // You can search weather forecast for 5 days with data every 3 hours by city name. All weather data can be obtained in JSON and XML formats.
    // API call:
    // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}

    // api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid={your api key}

    // api.openweathermap.org/data/2.5/forecast?q={city name},{state},{country code}&appid={your api key}

    // Parameters:
    // q city name, state and and country code divided by comma, use ISO 3166 country codes. You can specify the parameter not only in English. In this case, the API response should be returned in the same language as the language of requested location name if the location is in our predefined list of more than 200,000 locations.

    // api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml);


