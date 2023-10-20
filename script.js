
    const apiKey = "e6ce663b112d65abf03a26b4c761180d";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const cityElement = document.querySelector(".city");
    const tempElement = document.querySelector(".temp");
    const huminilatyElement = document.querySelector(".huminilaty");
    const windElement = document.querySelector(".wind");
    const weatherIcon = document.querySelector(".weather-icon");

    async function fetchWeather(city) {
        try {
            const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
            const data = await response.json();
            console.log(data);
            cityElement.innerHTML = data.name;
            tempElement.innerHTML = `${Math.round(data.main.temp)}°C`;
            huminilatyElement.innerHTML = `${data.main.humidity}%`;
            windElement.innerHTML = `${data.wind.speed} km/h`;

            switch (data.weather[0].main) {
                case "Clouds":
                case "Clear":
                case "Rain":
                case "Drizzle":
                case "Mist":
                    weatherIcon.src = `images/${data.weather[0].main.toLowerCase()}.png`;
                    break;
                default:
                    weatherIcon.src = "images/unknown.png";
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    }

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");

    searchBtn.addEventListener("click", () => {
        fetchWeather(searchBox.value);
    });

    // Initialize with a default city (e.g., Malda)
    fetchWeather("Malda");

