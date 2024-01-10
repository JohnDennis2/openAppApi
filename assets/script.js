//First I need a fucntion that will take the user input for the city desired
//that will fetch the information from the Open Weather API

//Then I need a function that will take the information from the API
//and Pars that info and display the information in the Current Weather container.
//Weather information should include temperature, humidity, and wind speed.

//I need a function that will use local storage 
//to show the past serach history of cities in a container underneath the search bar.

//I need a function that will display the future weather conditons for a chosen city

//I need a function that will display the past city and its information within the current city container



function fetchData() {
    // Get the user input from the text box
    const userInput = document.getElementById('searchInput').value;
  
    // Make a fetch request to the API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={71a25e6c87a9f1395a5c450856b87bbb}`)
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