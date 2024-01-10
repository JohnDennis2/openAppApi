//First I need a fucntion that will take the user input for the city desired
//that will fetch the information from the Open Weather API

//Then I need a function that will take the information from the API
//and Pars that info and display the information in the Current Weather container.
//Weather information should include temperature, humidity, and wind speed.

//I need a function that will use local storage 
//to show the past serach history of cities in a container underneath the search bar.

//I need a function that will display the future weather conditons for a chosen city

//I need a function that will display the past city and its information within the current city container when clicked





// this function gets the data from the API
function fetchData() {
    // Get the user input from the text box
    const userInput = document.getElementById('searchInput').value;
  
    // Make a fetch request to the API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={d27ea83abb77012fb631eb21791add32}`)
      .then(response => response.json())
      .then(data => {
        // Display the fetched information in the display div
        const displayDiv = document.getElementById('currentInfo');
        displayDiv.textContent = JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  let previousSearches = []

  function handleSearch(input) {
    
    previousSearches.push(input);
  }
  
// function
  function displaySearchInfo(searchInfo) {
    const $resultDiv = $('#resultDiv'); 
    $resultDiv.empty(); 
  
    
    const htmlContent = `<h2>${searchInfo.title}</h2>
                        <p>${searchInfo.description}</p>
                        <img src="${searchInfo.image}" alt="Search Image">`;
  
    $resultDiv.append(htmlContent); 
  }
  
  
  const pastSearch = {
    title: 'Example Search',
    description: 'This is an example search result.',
    image: 'example.jpg'
  };
  
  
  displaySearchInfo(pastSearch);

  function displayFutureWeather(weatherData) {
    const forecastContainer = document.getElementById('forecast-container');
  
    
    forecastContainer.innerHTML = '';
  
   
    weatherData.forEach((forecast) => {
      
      const forecastDiv = document.createElement('div');
      const dateSpan = document.createElement('span');
      const temperatureSpan = document.createElement('span');
      const descriptionSpan = document.createElement('span');
  
      
      dateSpan.textContent = forecast.date;
      temperatureSpan.textContent = forecast.temperature;
      descriptionSpan.textContent = forecast.description;
  
      
      forecastDiv.appendChild(dateSpan);
      forecastDiv.appendChild(temperatureSpan);
      forecastDiv.appendChild(descriptionSpan);
      forecastContainer.appendChild(forecastDiv);
    });
  }
  
