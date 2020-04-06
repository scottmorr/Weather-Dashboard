

$(document).ready(function () {


  var currentDay = moment().format('LL');
  $("#addDate").append(currentDay);



  $("#date").append(currentDay);



  $('#search-button').on("click", function (event) {
    event.preventDefault();
    console.log("clicked");


    var searchValue = $("#search-value").val().trim();
    


    $("#city").text(searchValue);
   

    //$("#date").hide(click);
    //$("#date").show();







    $(".history").on("click", "li", function () {
      searchWeather($(this).val());
      console.log(this);
    });

    function makeRow(text) {
      var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
      $(".history").append(li);
    }



    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=4c977f45a07a9d54331ea1e40d5a5185";

    function searchWeather() {
      $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "json",
      }).then(function (response) {
        //  console.log(response);
        var city = $("<div>");


         var cityName = (response.value);
         $("#city").text(cityName);
         $("#city").css({"color": "black" })



        $("#temp").text("Temperature: ");
        var temperatureFarenheit = ((response.main.temp - 273.15) * 1.8) + 32;

        $(".temperatureFarenheit").append(Math.round(temperatureFarenheit) + " °F");


        $("#humidity").text("Humidity: ");
        $(".currentHumidity").append(response.main.humidity + " %");
        $("#windSpeed").text("Wind Speed: ");
        $(".currentWindSpeed").append(response.wind.speed + " MPH");

        //UV index here
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
            //conditional that color codes uv index
          var indexSymbol = (response.value);
          console.log(indexSymbol);
          if (indexSymbol >= 8.0) {
            $("#uvIndex").css({ "border": "1px solid black", "background-color": "lightred" });
          } else if (indexSymbol >= 5.9) {
            $("#uvIndex").css({ "border": "1px solid black", "background-color": "yellow" });
          } else {
            $("#uvIndex").css({ "border": "1px solid black", "background-color": "lightgreen" });
          }



        });

        //5 day forecast  
        var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=4c977f45a07a9d54331ea1e40d5a5185&units=imperial"

        $.ajax({
          type: "GET",
          url: fiveDayUrl,
          dataType: "json",
        }).then(function (response) {
          console.log(response);

          moment.unix(response.daily[0].dt).format()
          console.log(moment.unix(response.daily[0].dt).format("M/D/YY"))

          

          //allows temp data to be ordered on each card
          $("#dayOneTemp").text(Math.round(response.daily[0].temp.day) + " °F");
          $("#dayOneHumidity").text(response.daily[0].humidity + " % Humidity");
          $("#dayOneDate").text(moment.unix(response.daily[0].dt).format("M/D/YY"));           

          $("#dayTwoTemp").text(Math.round(response.daily[1].temp.day) + " °F");
          $("#dayTwoHumidity").text(response.daily[1].humidity + " % Humidity");
          $("#dayTwoDate").text(moment.unix(response.daily[1].dt).format("M/D/YY"));             


          $("#dayThreeTemp").text(Math.round(response.daily[2].temp.day) + " °F");
          $("#dayThreeHumidity").text(response.daily[2].humidity + " % Humidity");
          $("#dayThreeDate").text(moment.unix(response.daily[2].dt).format("M/D/YY"));             


          $("#dayFourTemp").text(Math.round(response.daily[3].temp.day) + " °F");
          $("#dayFourHumidity").text(response.daily[3].humidity + " % Humidity");
          $("#dayFourDate").text(moment.unix(response.daily[3].dt).format("M/D/YY"));             

          $("#dayFiveTemp").text(Math.round(response.daily[4].temp.day) + " °F");
          $("#dayFiveHumidity").text(response.daily[4].humidity + " % Humidity");
          $("#dayFiveDate").text(moment.unix(response.daily[4].dt).format("M/D/YY"));             




        });


      });
    };


    searchWeather(searchValue);
    makeRow(searchValue);
  });
});









