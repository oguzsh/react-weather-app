import React from "react";

const Weather = props => (
  <div className="weather_data">
    <div className="weather_title">
      <h1> {props.data.city_name} </h1>
      <h3> {props.data.weather_status} </h3>
      <p> {props.data.weather_desc} </p>
    </div>
    <div className="weather_status">
      <ul>
        <li>
          Temp : <span> {props.data.temp}° </span>
        </li>
        <li>
          Humidity : <span>{props.data.humidity}%</span>
        </li>
        <li>
          Wind : <span>{props.data.wind}km/s</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Weather;
