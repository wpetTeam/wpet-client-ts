import { Icon } from "@iconify/react";
import { Dispatch, SetStateAction } from "react";

export const Weather = (props: {
    weather: string;
    setWeather: Dispatch<SetStateAction<string>>;
}) => {
    const handleWeather = (weather_value: string) => {
        props.setWeather(weather_value);
    };
    return (
        <div className="weather-container">
            <Icon
                icon="fluent:weather-sunny-16-filled"
                className={
                    props.weather === "sunny"
                        ? "weather-icon sunny"
                        : "weather-icon"
                }
                onClick={() => handleWeather("sunny")}
            />
            <Icon
                icon="fluent:weather-partly-cloudy-day-16-filled"
                className={
                    props.weather === "sunny-cloudy"
                        ? "weather-icon sunny-cloudy"
                        : "weather-icon"
                }
                onClick={() => handleWeather("sunny-cloudy")}
            />
            <Icon
                icon="fluent:weather-snowflake-48-filled"
                className={
                    props.weather === "snow"
                        ? "weather-icon snow"
                        : "weather-icon"
                }
                onClick={() => handleWeather("snow")}
            />
            <Icon
                icon="emojione-monotone:umbrella-with-rain-drops"
                className={
                    props.weather === "rainy"
                        ? "weather-icon rainy"
                        : "weather-icon"
                }
                onClick={() => handleWeather("rainy")}
            />
            <Icon
                icon="ant-design:thunderbolt-filled"
                className={
                    props.weather === "thunderbolt"
                        ? "weather-icon thunder"
                        : "weather-icon"
                }
                onClick={() => handleWeather("thunderbolt")}
            />
            <Icon
                icon="entypo-social:rainbow"
                className={
                    props.weather === "rainbow"
                        ? "weather-icon rainbow"
                        : "weather-icon"
                }
                onClick={() => handleWeather("rainbow")}
            />
            <Icon
                icon="fluent:weather-cloudy-20-filled"
                className={
                    props.weather === "rcloudy"
                        ? "weather-icon cloudy"
                        : "weather-icon"
                }
                onClick={() => handleWeather("cloudy")}
            />
        </div>
    );
};
