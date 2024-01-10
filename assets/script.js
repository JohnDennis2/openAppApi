//First I need a fucntion that will take the user input for the city desired
//that will fetch the information from the Open Weather API

//Then I need a function that will take the information from the API
//and Pars that info and display the information in the Current Weather container.
//Weather information should include temperature, humidity, and wind speed.

//I need a function that will use local storage 
//to show the past serach history of cities in a container underneath the search bar.

//I need a function that will display the future weather conditons for a chosen city

//I need a function that will display the past city and its information within the current city container when clicked





// this function gets the data from the API and displays info in the current div
function fetchData() {
    // Get the user input from the text box
    const userInput = document.getElementById('searchInput').value;
  
    // Make a fetch request to the API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d27ea83abb77012fb631eb21791add32}`)
      .then(response => response.json())
      .then(data => {
        
        const displayDiv = document.getElementById('currentInfo');
        displayDiv.textContent = JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

fetchData ()

  let previousSearches = []
// function that should get and display previous search data

  function handleSearch(input) {
    
    previousSearches.push(input);
  }
  

// function to display the search info

  function displaySearchInfo(searchInfo) {
    const $resultDiv = $('#resultDiv'); 
    $resultDiv.empty(); 
  
    
    const htmlContent = `<h2>${searchInfo.title}</h2>
                        <p>${searchInfo.description}</p>
                        <img src="${searchInfo.image}" alt="Search Image">`;
  
    $resultDiv.append(htmlContent); 
  }
  
  
  const pastSearch = {
    temperature: 'pastTemp',
    humidity: 'pastHumid',
    wind: 'pastWind'
  };
  
  



  displaySearchInfo(pastSearch);

// function to display the future weather


  function displayFutureWeather(weatherData)
   {
    const forecastContainer = document.getElementById('fiveDay');
  
    
    forecastContainer.innerHTML = '';
  
   

    weatherData.forEach((forecast) => {
      
      const forecastDiv = document.createElement('div');
      const dateSpan = document.createElement('span');
      const temperatureSpan = document.createElement('span');
      const windspeedSpan = document.createElement('span');
      const humiditySpan = document.createElement('span')
  
      
      dateSpan.textContent = forecast.date;
      temperatureSpan.textContent = forecast.temperature;
      windspeedSpanSpan.textContent = forecast.windspeeed;
      humiditySpan.textContent = forecast.humidity;
  
      
      forecastDiv.appendChild(dateSpan);
      forecastDiv.appendChild(temperatureSpan);
      forecastDiv.appendChild(descriptionSpan);
      forecastContainer.appendChild(forecastDiv);
    });
  }
  

