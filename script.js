

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
      }).then(function (response) {
        console.log(response);
        var city = $("<div>");
        //start coding here look at using append or appendChild to make the weather facts appear
        //add class and have current weather appear

          var cityName = (response.value);
         $("#current-city").text(cityName);
            $("#current-city").css({"text-align":"center","color":"blue"})


        $("#temp").text("Temperature: ");
        var temperatureFarenheit = ((response.main.temp - 273.15) * 1.8) + 32;
        
        $(".temperatureFarenheit").append(Math.round(temperatureFarenheit) +  " °F");





        //convert temp to farenheit
        //add if conditional here that adds a symbol for how warm it is
        $("#humidity").text("Humidity: ");
        $(".currentHumidity").append(response.main.humidity + " %");
        $("#windSpeed").text("Wind Speed: ");
        $(".currentWindSpeed").append(response.wind.speed + " MPH");
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=4c977f45a07a9d54331ea1e40d5a5185&lat=" + lat + "&lon=" + lon;
        $.ajax({
          type: "GET",
          url: uvUrl,
          dataType: "json",
        }).then(function (response) {
          console.log(response, "hey Joe");

          $("#uvIndex").text("UV Index: ");
          $(".currentUvIndex").append(response.value);

          var indexSymbol = (response.value);
          console.log( indexSymbol);
          if (indexSymbol >= 8.0) {
            $("#uvIndex").css({"border": "1px solid black", "background-color": "lightred"});
          } else if (indexSymbol >= 5.9) {
            $("#uvIndex").css({"border": "1px solid black", "background-color": "lightyellow"});
          }else  {
            $("#uvIndex").css({"border": "1px solid black", "background-color": "lightgreen"});
          }
           
          

        });




        //5 day forecast
        //var  fiveDayUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + searchValue + "&appid=4c977f45a07a9d54331ea1e40d5a5185&lat"


        // $.ajax({
        //   type: "GET",
        //   url: fiveDayUrl,
        //   dataType: "json",
        // }).then(function(response) {





     













      city.textContent = searchValue;
    });
};


searchWeather(searchValue);
  });
});









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


