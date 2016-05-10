//Resources
// coder project digital clock
// moment.js documentation
// weather underground api

function displayTime() {
    
    //calling each clock div
    var clockDiv = document.getElementById('clock');
    var clockDiv2 = document.getElementById('clock2');
    var clockDiv3 = document.getElementById('clock3');
    var clockDiv4 = document.getElementById('clock4');

    //using moment js
    var now = moment();

    //to check if the time is being called correctly
    // console.log( moment.utc().add(5,'hours').format("dddd, MMMM Do YYYY, h:mm:ss") );

    //each clockdiv has timezone and format specified 
    clockDiv.innerText = ( moment.utc().add(-4,'hours').format("dddd, MMMM Do YYYY, h:mm:ss A") );

    clockDiv2.innerText = ( moment.utc().add(-4,'hours').format("dddd, MMMM Do YYYY, h:mm:ss A") );

    clockDiv3.innerText = ( moment.utc().add(5,'hours').format("dddd, MMMM Do YYYY, h:mm:ss A") );

    clockDiv4.innerText = ( moment.utc().add(1,'hours').format("dddd, MMMM Do YYYY, h:mm:ss A") );

}

//function to call specific weather data for each location/timezone

var displayNYWeather = function(response){

    //new york weather data
    var nyTemperature = Math.round(response.current_observation.temp_f) + "°";
    var nyIcon = response.current_observation.icon_url;

    $('.nytemperature').text(nyTemperature);
    $('.nyweatherIcon').html("<img src=" + nyIcon + ">");
}


var displayAnrWeather = function(response){

    //ann arbor weather data
    var anrTemperature = Math.round(response.current_observation.temp_f) + "°";
    var anrIcon = response.current_observation.icon_url;

    $('.anrtemperature').text(anrTemperature);
    $('.anrweatherIcon').html("<img src=" + anrIcon + ">");  
}

var displayNDWeather = function(response){

    //ann arbor weather data
    var newdTemperature = Math.round(response.current_observation.temp_f) + "°";
    var newdIcon = response.current_observation.icon_url;

    $('.newdelhitemperature').text(newdTemperature);
    $('.newdelhiweatherIcon').html("<img src=" + newdIcon + ">");  
}

var displayLonWeather = function(response){

    //london weather data
    var lonTemperature = Math.round(response.current_observation.temp_f) + "°";
    var lonIcon = response.current_observation.icon_url;

    $('.lontemperature').text(lonTemperature);
    $('.lonweatherIcon').html("<img src=" + lonIcon + ">");
}

//running response for each location/timezone
//using wunderground api and key generated

var getNYWeather = function(){

    var thisURL = "http://api.wunderground.com/api/c7d910f2745792de/geolookup/conditions/q/NY/New_York.json"

    $.ajax({
        url: thisURL,
        dataType: "jsonp",
        success: function(response){
            displayNYWeather(response);
            console.log(response);   
        }
    }); 
};


var getAnrWeather = function(){

    var thisURL = "http://api.wunderground.com/api/c7d910f2745792de/geolookup/conditions/q/MI/Ann_Arbor.json"

    $.ajax({
        url: thisURL,
        dataType: "jsonp",
        success: function(response){
            displayAnrWeather(response);
            console.log(response);   
        }

    }); 
};

var getNDWeather = function(){

    var thisURL = "http://api.wunderground.com/api/c7d910f2745792de/geolookup/conditions/q/IN/New_Delhi.json"

    $.ajax({
        url: thisURL,
        dataType: "jsonp",
        success: function(response){
            displayNDWeather(response);
            console.log(response);   
        }
    }); 
};

var getLonWeather = function(){

    var thisURL = "http://api.wunderground.com/api/c7d910f2745792de/geolookup/conditions/q/UK/London.json"

    $.ajax({
        url: thisURL,
        dataType: "jsonp",
        success: function(response){
            displayLonWeather(response);
            console.log(response);
            
        }


    }); 
};

//initializing weather funcitions for all specified locations/timezones

var initialize = function(){
    getNYWeather();
    getAnrWeather();
    getNDWeather();
    getLonWeather();
};

//running clock and weather functions when page loads

$(document).ready( function() {

    displayTime();
    setInterval(displayTime, 1000);
    initialize();


});
