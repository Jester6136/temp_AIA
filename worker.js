var box1 = document.getElementById('original') 
var button = document.getElementById('subm')
var box2 = document.getElementById('translated') 


button.addEventListener("click", function(){ 
    // run api
    text = box1.value
    box2.value = text
}); 

const userAction = async () => {
    const response = await fetch('http://example.com/movies.json', {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
  }