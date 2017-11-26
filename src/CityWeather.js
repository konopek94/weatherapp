import React, { Component } from "react";

const API = "http://api.openweathermap.org/data/2.5/weather?id=";
const KEY = "&appid=f95411f1794039dcee30fab6e62c53d4&lang=pl";

class CityWeather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            weather: "",
            temp: "",
            icon: ""
        };
        this.fToC = this.fToC.bind(this);
    }

    fToC(fahrenheit) {
        var fTemp = fahrenheit - 273.15;
        return fTemp;
    }

    componentDidMount() {
        fetch(API + this.props.appid + KEY)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    weather: response.weather[0].description,
                    icon:
                        "http://openweathermap.org/img/w/" +
                        response.weather[0].icon +
                        ".png",
                    temp: this.fToC(response.main.temp)
                });
            });
    }

    render() {
        return (
            <div className="city-box">
                <p>{this.props.cityName}</p>

                <div className="row">
                    {this.state.temp} °C <img src={this.state.icon} alt="" />
                </div>
                <p>{this.state.weather}</p>
            </div>
        );
    }
}

export default CityWeather;
