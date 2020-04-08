


var citySearch = $("#citySearch");

var cityHistory = []

citySearch.on("click", function () {
    var cityInput = $("#cityInput").val();
    var cityName = $("#cityName");
    cityName.text(cityInput).val();
    console.log(cityInput)

    cityHistory.push(cityInput);
    console.log(cityHistory)
    
    localStorage.setItem("cityHistory", JSON.stringify(cityHistory));
    
    $("#city1").text(cityHistory[5]);
    $("#city2").text(cityHistory[4]);
    $("#city3").text(cityHistory[3]);
    $("#city4").text(cityHistory[2]);
    $("#city5").text(cityHistory[1]);
    $("#city6").text(cityHistory[0]);


  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&APPID=dcfc433ab4ad883a7e28b74af677fddb";

  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);

      var tempK = response.main.temp;
      var tempF = Math.floor((tempK - 273.15) * 1.80 + 32);
      // console.log(tempF);
      $("#temperature").text(tempF + "˚F");

      var humid = response.main.humidity;
      $("#humidity").text(humid + "%");

      var wind = response.wind.speed;
      $("#windSpeed").text(wind + "mph");



      var lat = response.coord.lat;
      var lon = response.coord.lon;
      var uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi/forecast?appid=dcfc433ab4ad883a7e28b74af677fddb&lat=" + lat + "&lon=" + lon + "&cnt=5"
      
      $.ajax({
        url: uvIndexURL,
        method: "GET"
      }).then(function(res) {
        // console.log(res);

      var uvIndex = res[0].value;
      $("#uvIndex").text(uvIndex);

      if (uvIndex < 7) {
        $("#uvIndex").attr("class", "safeUv");
      }
      else if (uvIndex > 6) {
        $("#uvIndex").attr("class", "dangerUv");
      }
      });



      var cityId = response.id;

      var forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&APPID=dcfc433ab4ad883a7e28b74af677fddb";
      $.ajax({
        url: forecastURL,
        method: "GET"
      }).then(function(r) {
        console.log(r);

        $("#fDate1").text(r.list[0].dt_txt.slice(0, 10));
        var fTempK1 = r.list[0].main.temp;
        console.log(fTempK1)
        var fTempF1 = Math.floor((fTempK1 - 273.15) * 1.80 + 32);
        $("#fTemp1").text("Temp: " + fTempF1 + "˚F");
        $("#fHumid1").text("Humidity: " + r.list[0].main.humidity);

        var weatherType1 = r.list[0].weather[0].main;
        console.log(weatherType1);

        if (weatherType1 === "Rain") {
          $("#fImg1").attr("src", "images/clipart-rain-emoji-1.png")
        }
        else if (weatherType1 === "Clouds") {
          $("#fImg1").attr("src", "images/35cdae25b1b951859c8327555f3e6942_download-free-png-white-computing-cloud-emoji-free-download-image-_800-800.png")
        }
        else {
          $("#fImg1").attr("src", "images/sun-emoji-png-6.png")
        }


        $("#fDate2").text(r.list[10].dt_txt.slice(0, 10));
        var fTempK2 = r.list[1].main.temp;
        console.log(fTempK2)
        var fTempF2 = Math.floor((fTempK2 - 273.15) * 1.80 + 32);
        $("#fTemp2").text("Temp: " + fTempF2 + "˚F");
        $("#fHumid2").text("Humidity: " + r.list[1].main.humidity);

        var weatherType2 = r.list[1].weather[0].main;
        console.log(weatherType2);

        if (weatherType2 === "Rain") {
          $("#fImg2").attr("src", "images/clipart-rain-emoji-1.png")
        }
        else if (weatherType2 === "Clouds") {
          $("#fImg2").attr("src", "images/35cdae25b1b951859c8327555f3e6942_download-free-png-white-computing-cloud-emoji-free-download-image-_800-800.png")
        }
        else {
          $("#fImg2").attr("src", "images/sun-emoji-png-6.png")
        }


        $("#fDate3").text(r.list[20].dt_txt.slice(0, 10));
        var fTempK3 = r.list[2].main.temp;
        console.log(fTempK2)
        var fTempF3 = Math.floor((fTempK3 - 273.15) * 1.80 + 32);
        $("#fTemp3").text("Temp: " + fTempF3 + "˚F");
        $("#fHumid3").text("Humidity: " + r.list[2].main.humidity);

        var weatherType3 = r.list[2].weather[0].main;
        console.log(weatherType3);

        if (weatherType3 === "Rain") {
          $("#fImg3").attr("src", "images/clipart-rain-emoji-1.png")
        }
        else if (weatherType3 === "Clouds") {
          $("#fImg3").attr("src", "images/35cdae25b1b951859c8327555f3e6942_download-free-png-white-computing-cloud-emoji-free-download-image-_800-800.png")
        }
        else {
          $("#fImg3").attr("src", "images/sun-emoji-png-6.png")
        }


        $("#fDate4").text(r.list[30].dt_txt.slice(0, 10));
        var fTempK4 = r.list[3].main.temp;
        console.log(fTempK4)
        var fTempF4 = Math.floor((fTempK4 - 273.15) * 1.80 + 32);
        $("#fTemp4").text("Temp: " + fTempF4 + "˚F");
        $("#fHumid4").text("Humidity: " + r.list[3].main.humidity);

        var weatherType4 = r.list[3].weather[0].main;
        console.log(weatherType4);

        if (weatherType4 === "Rain") {
          $("#fImg4").attr("src", "images/clipart-rain-emoji-1.png")
        }
        else if (weatherType4 === "Clouds") {
          $("#fImg4").attr("src", "images/35cdae25b1b951859c8327555f3e6942_download-free-png-white-computing-cloud-emoji-free-download-image-_800-800.png")
        }
        else {
          $("#fImg4").attr("src", "images/sun-emoji-png-6.png")
        }


        $("#fDate5").text(r.list[39].dt_txt.slice(0, 10));
        var fTempK5 = r.list[4].main.temp;
        console.log(fTempK5)
        var fTempF5 = Math.floor((fTempK5 - 273.15) * 1.80 + 32);
        $("#fTemp5").text("Temp: " + fTempF5 + "˚F");
        $("#fHumid5").text("Humidity: " + r.list[4].main.humidity);

        var weatherType5 = r.list[4].weather[0].main;
        console.log(weatherType5);

        if (weatherType5 === "Rain") {
          $("#fImg5").attr("src", "images/clipart-rain-emoji-1.png")
        }
        else if (weatherType5 === "Clouds") {
          $("#fImg5").attr("src", "images/35cdae25b1b951859c8327555f3e6942_download-free-png-white-computing-cloud-emoji-free-download-image-_800-800.png")
        }
        else {
          $("#fImg5").attr("src", "images/sun-emoji-png-6.png")
        }
      });
    });

})

$("#city1").text(localStorage.getItem(cityHistory[5]));
$("#city2").text(cityHistory[4]);
$("#city3").text(cityHistory[3]);
$("#city4").text(cityHistory[2]);
$("#city5").text(cityHistory[1]);
$("#city6").text(localStorage.getItem(cityHistory[0]));


//CREATE CSS FOR A CARD SHAPE TO HAVE THE FORECAST INSIDE OF.
//HAVE JAVASCRIPT CREATE DIVS WITH THE SAME ID USED FOR CSS