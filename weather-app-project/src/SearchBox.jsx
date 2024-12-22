import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

// eslint-disable-next-line react/prop-types
const SearchBox = ({ updatedInfo }) => {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "364d049e933dc6c01c9d832b001bc024";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let data = await response.json();
            return {
                city: city,
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description,
            };
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            // console.error(err);
            setError(true);
            return null;
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
        setError(false); // Reset the error state when the user types
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setCity("");
        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updatedInfo(newInfo);
            setError(false);
        } else {
            console.log();
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="standard"
                    required
                    onChange={handleChange}
                />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
            {error && (
                <p style={{ color: "red", marginTop: "1rem" }}>No such city exists</p>
            )}
        </div>
    );
};

export default SearchBox;