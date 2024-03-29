//First I need a fucntion that will take the user input for the city desired
//that will fetch the information from the Open Weather API

//Then I need a function that will take the information from the API
//and Pars that info and display the information in the Current Weather container.
//Weather information should include temperature, humidity, and wind speed.

//I need a function that will use local storage 
//to show the past serach history of cities in a container underneath the search bar.

//I need a function that will display the future weather conditons for a chosen city

//I need a function that will display the past city and its information within the current city container when clicked


//I need to get the user input and 

const previousSearches = JSON.parse(localStorage.getItem("previous-searches")) || [];
// this function gets the data from the API and displays info in the current div

//function to call lat and long

// Present display
//future display
//past refereces
const searchHistoryDiv = document.querySelector(".searchHistory")

function getLatAndLong (cityInputParam) {

  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityInputParam}&limit=15&appid=d27ea83abb77012fb631eb21791add32`)
  .then(response => response.json())
  .then(data => {
    console.log(data[0].lat)
console.log(data[0].lon)

fetchData(data[0].lat,data[0].lon)

  })


}


function fetchData(latParam,lonParam) {
    
     fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latParam}&lon=${lonParam}&appid=d27ea83abb77012fb631eb21791add32&units=imperial`)
      .then(response => response.json())
      .then(data => {
        console.log (data)
        const temp = document.getElementById('temp');
          const windSpeedDis = document.getElementById('wind')
          const humid = document.getElementById('humidity')

        temp.innerHTML = `current temperateture : ${data.list[0].main.temp} Fahrenheit`
        wind.innerHTML = `current wind: ${data.list[0].wind.speed} MPH`
        humidity.innerHTML = `current humidity: ${data.list[0].main.humidity} Percent`

        //how do I get the right info here?

displayFutureWeather(data)
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }


  function displayFutureWeather(data) {
    const forecastContainer = document.getElementById('fiveDay');
    forecastContainer.innerHTML = '';
console.log("data=",data);
console.log("length=", data.list.length);

let i = 0;

    data.list.forEach((forecast) => {
      if (i % 8 === 0){

      

  
      const fiveDay = document.createElement('div');
      const dateElement = document.createElement('p')
      const temperatureSpan = document.createElement('p');
      const windSpeedSpan = document.createElement('p');
      const humiditySpan = document.createElement('p');
  
      dateElement.textContent = forecast.dt_txt
      temperatureSpan.textContent = `temp: ${forecast.main.temp}`+"Fahrenheit";
      windSpeedSpan.textContent = `wind: ${forecast.wind.speed}`+"MPH";
      humiditySpan.textContent = `humidity: ${forecast.main.humidity}`+"percent";
  
      fiveDay.appendChild(dateElement)
      fiveDay.appendChild(temperatureSpan);
      fiveDay.appendChild(windSpeedSpan);
      fiveDay.appendChild(humiditySpan);
  
      forecastContainer.appendChild(fiveDay);
console.log("forecast");

      }

i++;

    });

appendToPreviousSearches(data.city.name);
handleSearch(data.city.name)

  }
 

  function appendToPreviousSearches(city){
  //const userInput = document.getElementById('searchInput').value;

    console.log("appendToPreviousSearches")
    if (previousSearches.indexOf(city) !== -1) { // if (doesn't not exist) exists
      return;
    }
    previousSearches.push(city);

   var newCity =  document.createElement("button")
   newCity.textContent = city;
   
   
    newCity.addEventListener("click", function(){
    getLatAndLong(city);
    })

    
    searchHistoryDiv.append(newCity)

//displayPreviousSearches();
}


//some how connect local storage info on the array for function handleSearch
let pastSearches = JSON.parse(localStorage.getItem("cityArray")) || []
 

 function handleSearch(input) {
    
   pastSearches.push(input);
   localStorage.setItem("cityArray", JSON.stringify(pastSearches))
 }

  

// function to display the search info
// I need to call from local storage

// function displaySearchInfo(pastSearch) {
//   const resultDiv = document.getElementById('pastSearch');


//   const h2 = document.createElement('h2');
//    h2.textContent = searchInfo;

//   const p = document.createElement('p');
//    humidity.textContent = searchInfo.description;

//    const image = document.createElement('img');
//   img.src = searchInfo.image;
//    img.alt = 'Search Image';

// }

// // Do i need to create these elements or are they already created?

//window.addEventListener('load', displaySearchInfo);
for(let i = 0; i < pastSearches.length; i++){
  
  var newCity =  document.createElement("button")
   newCity.textContent = pastSearches[i];

   newCity.addEventListener("click", function(){
    getLatAndLong(pastSearches[i]);
    })
  
    searchHistoryDiv.append(newCity)
}



const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener("click", function () {
  const userInput = document.getElementById('searchInput').value;
  getLatAndLong(userInput);

});