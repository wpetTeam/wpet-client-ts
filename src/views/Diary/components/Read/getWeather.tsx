import { Icon } from "@iconify/react";

export function getWeather(weather) {
    weather === "sunny" && (
        <Icon
            icon="fluent:weather-sunny-16-filled"
            style={{ color: "yellow" }}
        />
    );

    weather === "snow" && (
        <Icon
            icon="fluent:weather-snowflake-48-filled"
            style={{ color: "white" }}
        />
    );

    weather === "rainy" && (
        <Icon
            icon="emojione-monotone:umbrella-with-rain-drops"
            style={{ color: "gray" }}
        />
    );

    weather === "thunderbold" && (
        <Icon icon="ant-design:thunderbolt-filled" style={{ color: "blue" }} />
    );

    weather === "rainbow" && (
        <Icon icon="entypo-social:rainbow" style={{ color: "red" }} />
    );

    weather === "cloudy" && (
        <Icon
            icon="fluent:weather-cloudy-20-filled"
            style={{ color: "lightgray" }}
        />
    );
}
