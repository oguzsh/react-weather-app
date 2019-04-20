import React from "react";
import axios from "axios";

// Components
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d0f30d0ef26524ab8fc67add631bf76d";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      city_name: "London",
      temp: "15",
      humidity: "24",
      wind: "2.5",
      weather_status: "Drizzle",
      weather_desc: "Light intensity drizzle",
      weather_icon: ""
    };
  }

  handleChange = e => {
    this.setState({
      term: e.target.value
    });
  };

  handleClick = e => {
    axios
      .post(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          this.state.term +
          "&units=metric&appid=" +
          API_KEY
      )
      .then(res => {
        this.setState({
          city_name: res.data.name,
          temp: res.data.main.temp,
          humidty: res.data.main.humidity,
          wind: res.data.wind.speed,
          weather_status: res.data.weather[0].main,
          weather_desc: res.data.weather[0].description,
          weather_icon: res.data.weather[0].icon
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h1 className="header">Simple Weather App</h1>
        <Form onChange={this.handleChange} onClick={this.handleClick} />
        <Weather data={this.state} />
      </div>
    );
  }
}
