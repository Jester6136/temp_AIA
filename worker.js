var box1 = document.getElementById('original') 
var button = document.getElementById('subm')
var box2 = document.getElementById('translated') 


button.addEventListener("click", function(){ 
    // run api
    text = box1.value
    const action = async (text) => {
      const response = await fetch('http://127.0.0.1:8000/items/?text='+text, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const myJson = await response.json(); //extract JSON from the http response
      // do something with myJson
      box2.value = myJson
    }
    action(text)
});

