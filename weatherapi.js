var apiKey = "a3949c3b11f64b8ba9330408170902"
var weatherURL = ""
var input

function showAnimal(data) {
var temp = data.current.temp_f
if (temp > 90){
 document.getElementById("imagecontainer").innerHTML = "<img src='images/Cloudy.jpg' width='500' height='500'>"
}
if (temp > 75){
 document.getElementById("imagecontainer").innerHTML = "<img src='images/God.jpg' width='500' height='500'>"
}
if (temp > 60){
 document.getElementById("imagecontainer").innerHTML = "<img src='images/Winter_is_Coming.jpg' width='500' height='500'>"
}
if (temp > 40){
 document.getElementById("imagecontainer").innerHTML = "<img src='images/midtemp.jpg' width='500' height='500'>"
}
if (temp >20){
 document.getElementById("imagecontainer").innerHTML = "<img src='images/Hace_Calor.jpg' width='500' height='500'>"
}
document.getElementById("imagecontainer").innerHTML = temp + "degrees fahrenheit"
}

function makeRequest() {
  $.ajax({
    url: weatherURL,// what should go here?
    success: function(data) {
      // what should go here?
      showAnimal(data)
    }
  })
}


function submit() {
  input = document.getElementById('zipcode').value;
weatherURL = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + input
makeRequest()

}
