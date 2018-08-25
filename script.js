let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


function getWeather() {


    document.querySelector(".weather-info").style.display = "block";

    const cityName = document.querySelector("input").value;

    $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=19327fb20ae55f03a05cf4c2751e0ce2&units=metric`,
        success: function (data) {
            console.log(data);
            // let isNight;

            // if (isNight === true) {
            //     document.querySelector("body").style["background-color"] = "black"
            //     // black background
            //     // color white
            // } else {
            //     document.querySelector("body").style["background-color"] = "orange"                
            //     // orange background
            //     // color black
            // }

            // if (weatherCloud.lastMsgStatus === "seen") {
            //     icon = "day-cloudy";
            // } else if(weatherCloud.lastMsgStatus === "sent"){
            //     icon = "day-hail";
            // } else{
            //     icon = "night-cloudy-high";
            // }

            // document.querySelector(".cloud").innerHTML = `<i class="wi wi-${icon}"></i>`;  

            weatherType = data.weather[0].icon;
            if(weatherType =="01d" || weatherType == "01n"){
                document.querySelector(".cloud").src = "images/icons/clear.svg";
            }
            else if(weatherType =="02d" || weatherType == "02n"){
                document.querySelector(".cloud").src = "images/icons/few-clouds.svg";
            }
            else if(weatherType == "03d" || weatherType == "03n"){
                document.querySelector(".cloud").src = "images/icons/cloudy.svg";
            }
            else if(weatherType == "04d" || weatherType == "04n"){
                document.querySelector(".cloud").src = "images/icons/brokken.svg";
            }
            else if(weatherType == "09d" || weatherType == "09n"){
                document.querySelector(".cloud").src = "images/icons/shower-rain.svg";
            }
            else if(weatherType == "10d" || weatherType == "010n"){
                document.querySelector(".cloud").src = "images/icons/rain.svg";
            }
            else if(weatherType == "11d" || weatherType == "11n"){
                document.querySelector(".cloud").src = "images/icons/thunder.svg";
            }
            else if(weatherType == "13d" || weatherType == "13n"){
                document.querySelector(".cloud").src = "images/icons/snow.svg";
            }
            else if(weatherType == "50d" || weatherType == "50n"){
                document.querySelector(".cloud").src = "images/icons/mist.svg";
            }          
            document.querySelector(".city-name").innerHTML = `${data.name} , ${data.sys.country}`;
            document.querySelector(".temp > span").innerHTML = Math.round(data.main.temp);
            document.querySelector(".description").innerHTML = data.weather[0].main;
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min);
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max);

        },
        error: function (err) {
            console.log(err);
        }
    })


    $.ajax({

        url: `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=19327fb20ae55f03a05cf4c2751e0ce2&units=metric`,
        success: function(data){
            document.querySelector(".main").style.display = "block";

            
            let d1 = new Date(data.list[0].dt*1000);
            document.querySelector(".day1 > p").innerHTML = days[d1.getDay()]; 
            document.querySelector(".date1").innerHTML = `${months[d1.getMonth()]} ${d1.getDate()}`;       
            document.querySelector(".day1 #temp > span").innerHTML = Math.round(data.list[0].main.temp);
            document.querySelector(".day1 #cloud").innerHTML = (data.list[0].weather[0].description);
            forecastType1 = data.list[0].weather[0].icon;
            if(forecastType1 == "01d" || forecastType1 == "01n"){
                document.querySelector(".cloud-1").src = "images/icons/clear.svg";
            }
            else if(forecastType1 == "02d" || forecastType1 == "02n"){
                document.querySelector(".cloud-1").src = "images/icons/few-clouds.svg";
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".cloud-1").src = "images/icons/cloudy.svg";
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".cloud-1").src = "images/icons/brokken.svg";
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".cloud-1").src = "images/icons/shower-rain.svg";
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".cloud-1").src = "images/icons/rain.svg";
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".cloud-1").src = "images/icons/thunder.svg";
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".cloud-1").src = "images/icons/snow.svg";
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".cloud-1").src = "images/icons/mist.svg";
            }


            let d2 = new Date(data.list[8].dt*1000); 
            document.querySelector(".day2 > p").innerHTML = days[d2.getDay()]; 
            document.querySelector(".date2").innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}`;       
            document.querySelector(".day2 #temp > span").innerHTML = Math.round(data.list[5].main.temp);
            document.querySelector(".day2 #cloud").innerHTML = (data.list[8].weather[0].description);
            forecastType1 = data.list[8].weather[0].icon;
            if(forecastType1 == "01d" || forecastType1 == "01n"){
                document.querySelector(".cloud-2").src = "images/icons/clear.svg";
            }
            else if(forecastType1 == "02d" || forecastType1 == "02n"){
                document.querySelector(".cloud-2").src = "images/icons/few-clouds.svg";
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".cloud-2").src = "images/icons/cloudy.svg";
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".cloud-2").src = "images/icons/brokken.svg";
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".cloud-2").src = "images/icons/shower-rain.svg";
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".cloud-2").src = "images/icons/rain.svg";
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".cloud-2").src = "images/icons/thunder.svg";
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".cloud-2").src = "images/icons/snow.svg";
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".cloud-2").src = "images/icons/mist.svg";
            }


            let d3 = new Date(data.list[16].dt*1000);
            document.querySelector(".day3 > p").innerHTML = days[d3.getDay()]; 
            document.querySelector(".date3").innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;       
            document.querySelector(".day3 #temp > span").innerHTML = Math.round(data.list[13].main.temp);
            document.querySelector(".day3 #cloud").innerHTML = (data.list[16].weather[0].description);
            forecastType1 = data.list[16].weather[0].icon;
            if(forecastType1 == "01d" || forecastType1 == "01n"){
                document.querySelector(".cloud-3").src = "images/icons/clear.svg";
            }
            else if(forecastType1 == "02d" || forecastType1 == "02n"){
                document.querySelector(".cloud-3").src = "images/icons/few-clouds.svg";
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".cloud-3").src = "images/icons/cloudy.svg";
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".cloud-3").src = "images/icons/brokken.svg";
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".cloud-3").src = "images/icons/shower-rain.svg";
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".cloud-3").src = "images/icons/rain.svg";
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".cloud-3").src = "images/icons/thunder.svg";
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".cloud-3").src = "images/icons/snow.svg";
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".cloud-3").src = "images/icons/mist.svg";
            }


            let d4 = new Date(data.list[24].dt*1000); 
            document.querySelector(".day4 > p").innerHTML = days[d4.getDay()]; 
            document.querySelector(".date4").innerHTML = `${months[d4.getMonth()]} ${d4.getDate()}`;       
            document.querySelector(".day4 #temp > span").innerHTML = Math.round(data.list[21].main.temp);
            document.querySelector(".day4 #cloud").innerHTML = (data.list[24].weather[0].description);
            forecastType1 = data.list[24].weather[0].icon;
            if(forecastType1 == "01d" || forecastType1 == "01n"){
                document.querySelector(".cloud-4").src = "images/icons/clear.svg";
            }
            else if(forecastType1 == "02d" || forecastType1 == "02n"){
                document.querySelector(".cloud-4").src = "images/icons/few-clouds.svg";
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".cloud-4").src = "images/icons/cloudy.svg";
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".cloud-4").src = "images/icons/brokken.svg";
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".cloud-4").src = "images/icons/shower-rain.svg";
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".cloud-4").src = "images/icons/rain.svg";
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".cloud-4").src = "images/icons/thunder.svg";
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".cloud-4").src = "images/icons/snow.svg";
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".cloud-4").src = "images/icons/mist.svg";
            }


            let d5 = new Date(data.list[32].dt*1000);
            document.querySelector(".day5 > p").innerHTML = days[d5.getDay()]; 
            document.querySelector(".date5").innerHTML = `${months[d5.getMonth()]} ${d5.getDate()}`;       
            document.querySelector(".day5 #temp > span").innerHTML = Math.round(data.list[29].main.temp);
            document.querySelector(".day5 #cloud").innerHTML = (data.list[32].weather[0].description);
            forecastType1 = data.list[32].weather[0].icon;
            if(forecastType1 == "01d" || forecastType1 == "01n"){
                document.querySelector(".cloud-5").src = "images/icons/clear.svg";
            }
            else if(forecastType1 == "02d" || forecastType1 == "02n"){
                document.querySelector(".cloud-5").src = "images/icons/few-clouds.svg";
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".cloud-5").src = "images/icons/cloudy.svg";
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".cloud-5").src = "images/icons/brokken.svg";
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".cloud-5").src = "images/icons/shower-rain.svg";
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".cloud-5").src = "images/icons/rain.svg";
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".cloud-5").src = "images/icons/thunder.svg";
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".cloud-5").src = "images/icons/snow.svg";
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".cloud-5").src = "images/icons/mist.svg";
            }
            
        },

        error: function(error){
            console.log(error);
        }

    })

}

