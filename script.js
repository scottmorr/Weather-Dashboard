

$(document).ready(function () {


  var currentDay = moment().format('LL');
  $("#addDate").append(currentDay);






  $('#search-button').on("click", function (event) {
    event.preventDefault();
    console.log("clicked");


    var searchValue = $("#search-value").val().trim();
    //console.log(searchValue);
   

    $("#city").text(searchValue);
   // $("#city").css({"color": "blue" });

   
   
   
   
   
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=4c977f45a07a9d54331ea1e40d5a5185";

    function searchWeather() {
      $.ajax({
        type: "GET",
        url: queryURL,
        dataType: "json",
      }).then(function (response) {
      //  console.log(response);
        var city = $("<div>");
        //start coding here look at using append or appendChild to make the weather facts appear
        //add class and have current weather appear

        // var cityName = (response.value);
        // $("#city").text(cityName);
        // $("#city").css({"color": "blue" })


        $("#temp").text("Temperature: ");
        var temperatureFarenheit = ((response.main.temp - 273.15) * 1.8) + 32;

        $(".temperatureFarenheit").append(Math.round(temperatureFarenheit) + " °F");


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
          
         // $("#dayOne").text(Math.round(response.daily[0].temp.day) + "°F  "+response.daily[0].humidity + "% " +  moment.unix(response.daily[0].dt).format("M/D/YY")); //add date here            ;
         
         // $("#dayTwo").text(Math.round(response.daily[1].temp.day)  + "°F  "+response.daily[1].humidity + "% " +  moment.unix(response.daily[1].dt).format("M/D/YY"));                                                                                      
          
         // $("#dayThree").text(Math.round(response.daily[2].temp.day) + "°F  "+response.daily[2].humidity + "% " + moment.unix(response.daily[2].dt).format("M/D/YY"));                                                                                         
          
        //  $("#dayFour").text(Math.round(response.daily[3].temp.day) + "°F  "+response.daily[3].humidity + "% " + moment.unix(response.daily[3].dt).format("M/D/YY"));

        //  $("#dayFive").text(Math.round(response.daily[4].temp.day) + "°F  "+response.daily[4].humidity + "% " + moment.unix(response.daily[4].dt).format("M/D/YY"));


       $("#dayOneTemp").text(Math.round(response.daily[0].temp.day) + " °F");
       $("#dayOneHumidity").text(response.daily[0].humidity + " % Humidity");
       $("#dayOneDate").text( moment.unix(response.daily[0].dt).format("M/D/YY")); //add date here            
       
       $("#dayTwoTemp").text(Math.round(response.daily[1].temp.day) + " °F");
       $("#dayTwoHumidity").text(response.daily[1].humidity + " % Humidity");
       $("#dayTwoDate").text( moment.unix(response.daily[1].dt).format("M/D/YY")); //add date here            
       
        
       $("#dayThreeTemp").text(Math.round(response.daily[2].temp.day) + " °F");
       $("#dayThreeHumidity").text(response.daily[2].humidity + " % Humidity");
       $("#dayThreeDate").text( moment.unix(response.daily[2].dt).format("M/D/YY")); //add date here            
       
        
       $("#dayFourTemp").text(Math.round(response.daily[3].temp.day) + " °F");
       $("#dayFourHumidity").text(response.daily[3].humidity + " % Humidity");
       $("#dayFourDate").text( moment.unix(response.daily[3].dt).format("M/D/YY")); //add date here            
       
       $("#dayFiveTemp").text(Math.round(response.daily[4].temp.day) + " °F");
       $("#dayFiveHumidity").text(response.daily[4].humidity + " % Humidity");
       $("#dayFiveDate").text( moment.unix(response.daily[4].dt).format("M/D/YY")); //add date here            
       
        
      
        
        });
    
      
        //city.textContent = searchValue;
      });
    };


    searchWeather(searchValue);
  });
});


// //local storage
// $(".saveBtn").on('click', function () {
//   var activity = $(this).siblings(".description").val();
//   var time = $(this).parent().attr("id");
//   window.localStorage.setItem(time, JSON.stringify(activity))
//   console.log(activity);
//   var item = localStorage.getItem(time, 'activity');
//   var parsed = JSON.parse(item);
// });







