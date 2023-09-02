
const apiKey = "36786496e34501f2ae742054643be519";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");





async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

   
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "&deg;c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "/images/clouds.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "/images/clear.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "/images/drizzle.png"
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "/images/mist.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "/images/rain.png"
        }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "/images/snow.png"
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";


    }

   


    
}

// searchBtn.addEventListener("click","keydown",() => {
//     checkWeather(searchBox.value);
// })

// searchBox.addEventListener(){
//     checkWeather(searchBox.value);
// }

searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // Prevent the default form submission (if inside a form)
        event.preventDefault();
        
        // Call your function to perform the search action here
        checkWeather(searchBox.value);
    }
});

// Add a click event listener to the search button (optional)
searchBtn.addEventListener("click", function () {
    // Call your function to perform the search action here
    checkWeather(searchBox.value);
});
