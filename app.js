

document.querySelector('button').addEventListener("click",addWeatherData);

    function  addWeatherData(e) {
    const inputValue = document.querySelector("input").value;
    const weather = new Weather (inputValue);
    const ui = new UI ();
    if (inputValue != "") {
        weather.getWeather() 
    .then(data => { 
      console.log(data)
      ui.insertData(data)
      })
    .catch(error =>{
      console.log(error)
    }) 
    }else{
        alert("Scrivi qualcosa!")
        
    }
    
    e.preventDefault()
}
