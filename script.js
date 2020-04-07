// var queryURL = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=166a433c57516f51dfab1f7edaed8413"

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response.name);
//   });


// var tempK = response.main.temp;
// var tempF = Math.floor((tempK - 273.15) * 1.80 + 32);

var cityInput = $("#cityInput").val();
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
})

$("#city1").text(cityHistory[5]);
$("#city2").text(cityHistory[4]);
$("#city3").text(cityHistory[3]);
$("#city4").text(cityHistory[2]);
$("#city5").text(cityHistory[1]);
$("#city6").text(cityHistory[0]);


//CREATE CSS FOR A CARD SHAPE TO HAVE THE FORECAST INSIDE OF.
//HAVE JAVASCRIPT CREATE DIVS WITH THE SAME ID USED FOR CSS.