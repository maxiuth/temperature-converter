function convertToCelsius(temperature) {
  // Calculate the equivalent temperature to Celsius
  let tempCelsius = ((temperature - 32) * 5) / 9;

  // Round the temperature to the first decimal place
  tempCelsius = Math.round(tempCelsius);

  return tempCelsius;
}

function describeTemperature(temperature) {
  const tempCelsius = convertToCelsius(temperature);

  alert(`The temperature is ${tempCelsius} °C`);

  if (tempCelsius < 0) {
    alert("It's very cold outside. Please bring a jacket!");
  } else if (tempCelsius < 20) {
    alert("It's cold outside. Please stay warm.");
  } else if (tempCelsius < 30) {
    alert("It's warm outside.");
  } else if (tempCelsius < 40) {
    alert("It's hot outside. Stay hydrated!");
  } else {
    alert("It's very hot outside. Don't get burned!");
  }
}

const temperature = prompt("Please enter the temperature in Farenheit");
describeTemperature(temperature);
