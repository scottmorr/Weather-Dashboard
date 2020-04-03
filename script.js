

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
        //add class and have current weather appear
        $("#temp").text("Temperature: ");
          var temperatureFarenheit = ((response.main.temp -273.15) *1.8)+32;
          $(".temperatureFarenheit").append(temperatureFarenheit);
         // $(".temperatureFarenheitClass")$temperatureFarenheit.append

          //convert temp to farenheit
          //add if conditional here that adds a symbol for how warm it is
        $("#humidity").text("Humidity: ");
          $(".currentHumidity").append(response.main.humidity);
        $("#windSpeed").text("Wind Speed: ");
          $(".currentWindSpeed").append(response.wind.speed);
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        var uvUrl = "http://api.openweathermap.org/data/2.5/uvi?appid=4c977f45a07a9d54331ea1e40d5a5185&lat="+lat+"&lon="+lon;
          $.ajax({
            type: "GET",
            url: uvUrl,
            dataType: "json",
          }).then(function(response) {
        console.log(response);
        
        $("#uvIndex").text("UV Index: ");
        $(".currentUvIndex").append(response.value);
         });
        
        
        
        
        


      
        
      
      // current uv index api
      //http://samples.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&appid=b6907d289e10d714a6e88b30761fae22
       // "http://samples.openweathermap.org/data/2.5/uvi?q=" + searchValue + "&appid=4c977f45a07a9d54331ea1e40d5a5185";
       // 
        
        city.textContent = searchValue;
      });
    };


    searchWeather(searchValue);
  });
});
   

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


