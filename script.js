let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];


function getWeather() {


    document.querySelector(".weather-info").style.display = "block";

    const cityName = document.querySelector("input").value;

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=19327fb20ae55f03a05cf4c2751e0ce2&units=metric`,
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
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(weatherType =="02d" || weatherType == "02n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(weatherType == "03d" || weatherType == "03n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(weatherType == "04d" || weatherType == "04n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(weatherType == "09d" || weatherType == "09n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(weatherType == "10d" || weatherType == "10n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(weatherType == "11d" || weatherType == "11n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(weatherType == "13d" || weatherType == "13n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(weatherType == "50d" || weatherType == "50n"){
                document.querySelector(".cloud").innerHTML = `<i class="wi wi-fog"></i>`;
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

        url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=19327fb20ae55f03a05cf4c2751e0ce2&units=metric`,
        success: function(data){
            document.querySelector(".main").style.display = "block";

            
            let d1 = new Date(data.list[0].dt*1000);
            document.querySelector(".day1 > p").innerHTML = days[d1.getDay()]; 
            document.querySelector(".date1").innerHTML = `${months[d1.getMonth()]} ${d1.getDate()}`;       
            document.querySelector(".day1 #temp > span").innerHTML = Math.round(data.list[0].main.temp);
            document.querySelector(".day1 #cloud").innerHTML = (data.list[0].weather[0].description);
            forecastType1 = data.list[0].weather[0].icon;
             if(forecastType1 =="01d" || forecastType1 == "01n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType1 =="02d" || forecastType1 == "02n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType1 == "03d" || forecastType1 == "03n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType1 == "04d" || forecastType1 == "04n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType1 == "09d" || forecastType1 == "09n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType1 == "10d" || forecastType1 == "10n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType1 == "11d" || forecastType1 == "11n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType1 == "13d" || forecastType1 == "13n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType1 == "50d" || forecastType1 == "50n"){
                document.querySelector(".cloud-1").innerHTML = `<i class="wi wi-fog"></i>`;
            }          
            


            let d2 = new Date(data.list[8].dt*1000); 
            document.querySelector(".day2 > p").innerHTML = days[d2.getDay()]; 
            document.querySelector(".date2").innerHTML = `${months[d2.getMonth()]} ${d2.getDate()}`;       
            document.querySelector(".day2 #temp > span").innerHTML = Math.round(data.list[5].main.temp);
            document.querySelector(".day2 #cloud").innerHTML = (data.list[8].weather[0].description);
            forecastType2 = data.list[8].weather[0].icon;
             if(forecastType2 =="01d" || forecastType2 == "01n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType2 =="02d" || forecastType2 == "02n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType2 == "03d" || forecastType2 == "03n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType2 == "04d" || forecastType2 == "04n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType2 == "09d" || forecastType2 == "09n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType2 == "10d" || forecastType2 == "10n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType2 == "11d" || forecastType2 == "11n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType2 == "13d" || forecastType2 == "13n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType2 == "50d" || forecastType2 == "50n"){
                document.querySelector(".cloud-2").innerHTML = `<i class="wi wi-fog"></i>`;
            }          
            


            let d3 = new Date(data.list[16].dt*1000);
            document.querySelector(".day3 > p").innerHTML = days[d3.getDay()]; 
            document.querySelector(".date3").innerHTML = `${months[d3.getMonth()]} ${d3.getDate()}`;       
            document.querySelector(".day3 #temp > span").innerHTML = Math.round(data.list[13].main.temp);
            document.querySelector(".day3 #cloud").innerHTML = (data.list[16].weather[0].description);
            forecastType3 = data.list[16].weather[0].icon;
             if(forecastType3 =="01d" || forecastType3 == "01n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType3 =="02d" || forecastType3 == "02n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType3 == "03d" || forecastType3 == "03n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType3 == "04d" || forecastType3 == "04n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType3 == "09d" || forecastType3 == "09n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType3 == "10d" || forecastType3 == "10n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType3 == "11d" || forecastType3 == "11n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType3 == "13d" || forecastType3 == "13n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType3 == "50d" || forecastType3 == "50n"){
                document.querySelector(".cloud-3").innerHTML = `<i class="wi wi-fog"></i>`;
            }          
            


            let d4 = new Date(data.list[24].dt*1000); 
            document.querySelector(".day4 > p").innerHTML = days[d4.getDay()]; 
            document.querySelector(".date4").innerHTML = `${months[d4.getMonth()]} ${d4.getDate()}`;       
            document.querySelector(".day4 #temp > span").innerHTML = Math.round(data.list[21].main.temp);
            document.querySelector(".day4 #cloud").innerHTML = (data.list[24].weather[0].description);
            forecastType4 = data.list[24].weather[0].icon;
             if(forecastType4 =="01d" || forecastType4 == "01n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType4 =="02d" || forecastType4 == "02n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType4 == "03d" || forecastType4 == "03n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType4 == "04d" || forecastType4 == "04n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType4 == "09d" || forecastType4 == "09n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType4 == "10d" || forecastType4 == "10n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType4 == "11d" || forecastType4 == "11n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType4 == "13d" || forecastType4 == "13n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType4 == "50d" || forecastType4 == "50n"){
                document.querySelector(".cloud-4").innerHTML = `<i class="wi wi-fog"></i>`;
            }          
            


            let d5 = new Date(data.list[32].dt*1000);
            document.querySelector(".day5 > p").innerHTML = days[d5.getDay()]; 
            document.querySelector(".date5").innerHTML = `${months[d5.getMonth()]} ${d5.getDate()}`;       
            document.querySelector(".day5 #temp > span").innerHTML = Math.round(data.list[29].main.temp);
            document.querySelector(".day5 #cloud").innerHTML = (data.list[32].weather[0].description);
            forecastType5 = data.list[32].weather[0].icon;
            if(forecastType5 =="01d" || forecastType5 == "01n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-day-sunny"></i>`;
            }
            else if(forecastType5 =="02d" || forecastType5 == "02n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-day-cloudy"></i>`;
            }
            else if(forecastType5 == "03d" || forecastType5 == "03n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-cloud"></i>`;
            }
            else if(forecastType5 == "04d" || forecastType5 == "04n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-cloudy"></i>`;
            }
            else if(forecastType5 == "09d" || forecastType5 == "09n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-showers"></i>`;
            }
            else if(forecastType5 == "10d" || forecastType5 == "10n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-day-rain"></i>`;
            }
            else if(forecastType5 == "11d" || forecastType5 == "11n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-thunderstorm"></i>`;
            }
            else if(forecastType5 == "13d" || forecastType5 == "13n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-snow"></i>`;
            }
            else if(forecastType5 == "50d" || forecastType5 == "50n"){
                document.querySelector(".cloud-5").innerHTML = `<i class="wi wi-fog"></i>`;
            }
            
        },

        error: function(error){
            console.log(error);
        }

    })

}

