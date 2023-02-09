//Create Request
let request = new XMLHttpRequest();

//Request Connection
request.open('GET', 'https://restcountries.com/v2/all?access_key=b1fa50d01631ca0880e7b4491814c60c');

request.onload = function () {
  var data = JSON.parse(this.responseText);
  console.log(request.status);
  console.log(request.statusText);
  for (let country of data) {
    console.log(country.name);
    console.log(country.flag);
    console.log(' ');

  }
}

request.onerror = function () {
  console.log(request.status);
  console.log(request.statusText);
}

//Sending Request
request.send();

