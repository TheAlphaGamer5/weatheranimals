var apiKey = "a3949c3b11f64b8ba9330408170902"
var weatherURL = ""
var input

function showAnimal(data) {

}

function makeRequest() {
  $.ajax({
    url: weatherURL// what should go here?
    success: function(data) {
      // what should go here?
      showAnimal(data)
    }
  })
}


function submit() {
  input = document.getElementById('zipcode').value;
weatherURL = "https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=" + input

}
