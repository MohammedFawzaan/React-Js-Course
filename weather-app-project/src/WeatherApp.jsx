import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

const WeatherApp = () => {
    const [weather, setWeatherInfo] = useState({
        city: "Search For City",
        feelsLike: "Its Hot",
        temp: 25.5,
        tempMin: 23.3,
        tempMax: 33.3,
        humidity: 73,
        weather: "Dizzy",
        error: false, // Add error state
    });

    let updateInfo = (newInfo) => {
        if (newInfo) {
            setWeatherInfo({ ...newInfo, error: false });
        } else {
            setWeatherInfo({ ...weather, error: true });
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <SearchBox updatedInfo={updateInfo} />
            {weather.error ? (
                <p style={{ color: "red", fontSize: "1.5rem" }}>No Such City Exists</p>
            ) : (
                <InfoBox info={weather} />
            )}
        </div>
    );
};

export default WeatherApp;