// Temp(Fahrenheit) = [Temp(Degrees)*9/5] + 32;
function temperatureConversion() {
  const celsius = document.getElementById("celsius").value;
  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
}

// Weight(Pounds) = Weight(Kgs) * 2.2;
function weightConversion() {
  const kilos = document.getElementById("kg").value;
  const pounds = kilos * 2.2;
  document.getElementById("lbs").value = pounds.toFixed(2);
}

// Distance(Miles) = Distance(Kms) * 0.62137;
function distanceConversion() {
  const kms = document.getElementById("kms").value;
  const miles = kms * 0.62137;
  document.getElementById("miles").value = miles.toFixed(2);
}
