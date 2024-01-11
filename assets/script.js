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


// this function gets the data from the API and displays info in the current div

//function to call lat and long

// Present display
//future display
//past refereces
function getLatAndLong (cityInputParam) {

  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityInputParam}&limit=15&appid=d27ea83abb77012fb631eb21791add32`)
  .then(response => response.json())
  .then(data => {
    console.log(data[0].lat)
console.log(data[0].lon)

fetchData(data[0].lat,data[0].lon)

  })


}


function fetchData(latParam,lonParam) {
    
    
  
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latParam}&lon=${lonParam}&appid=d27ea83abb77012fb631eb21791add32`)
      .then(response => response.json())
      .then(data => {
        console.log (data)
        const displayDiv = document.getElementById('currentInfo');
        displayDiv.innerHTML = `currentTemp: ${data.list[0].main.temp}`

        //how do I get the right info here?

displayFutureWeather(data)
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }




//some how connect local storage info on the array for function handleSearch
  let previousSearches = []
// function that should get and display previous search data

  function handleSearch(input) {
    
    previousSearches.push(input);
  }
  

// function to display the search info
// I need to call from local storage

// function displaySearchInfo(pastSearch) {
//   const resultDiv = document.getElementById('currentInfo');
// // I need to connect these properly

//   const h2 = document.createElement('h2');
//   h2.textContent = searchInfo;

//   const p = document.createElement('p');
//   humidity.textContent = searchInfo.description;

//   const image = document.createElement('img');
//   img.src = searchInfo.image;
//   img.alt = 'Search Image';

//   resultDiv.appendChild(h2);
//   resultDiv.appendChild(p);
//   resultDiv.appendChild(p);
// }


// Do i need to create these elements or are they already created?
const pastSearch = {
  temperature: document.getElementById('pastTemp'),
  humidity: document.getElementById('pastHumid'),
  wind: document.getElementById('pastWind')
};
  



 //displaySearchInfo(pastSearch);



// function to display the future weather


  function displayFutureWeather(weatherData)
   {
    const forecastContainer = document.getElementById('fiveDay');

    forecastContainer.innerHTML = '';


    weatherData.forEach((forecast) => {
      
      const forecastDiv = document.createElement('div');
      const dateSpan = document.createElement('span');
      const temperatureSpan = document.createElement('span');
      const windSpeedSpan = document.createElement('span');
      const humiditySpan = document.createElement('span')
  
      
      dateSpan.textContent = forecast.date;
      temperatureSpan.textContent = forecast.temperature;
      windSpeedSpanSpan.textContent = forecast.windspeeed;
      humiditySpan.textContent = forecast.humidity;
  
      
      forecastDiv.appendChild(dateSpan);
      forecastDiv.appendChild(temperatureSpan);
      forecastDiv.appendChild(windspeedSpanSpan);
      forecastContainer.appendChild(forecastDiv);

      
    });
  }
  
const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener("click",function(){

  const userInput = document.getElementById('searchInput').value;
getLatAndLong(userInput)
} )