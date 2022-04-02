class Weather{
    constructor(city){
        this.city = city;
        this.apiKey = "792db72a2cd98b5238c8611733df4eeb";
    }
       async getWeather() {
            const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=${this.apiKey}`);
            const data = await response.json();
            return data;
        }

        changeCity(city) {
            this.city = city;
        }

}