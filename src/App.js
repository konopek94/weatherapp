import React, { Component } from "react";
import Slider from "react-slick";
import CityWeather from "./CityWeather";
import css from "./App.css";

// let CityArray = {
//     Wroclaw: "3081368",
//     Wejherowo: "3082473",
//     Gdańsk: "7531002"
// };

class App extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false
            // responsive: [
            //     { breakpoint: 320, settings: { slidesToShow: 1 } },
            //     { breakpoint: 768, settings: { slidesToShow: 3 } },
            //     { breakpoint: 1024, settings: { slidesToShow: 5 } },
            //     { breakpoint: 100000, settings: "unslick" }
            // ]
        };

        return (
            <div className="content">
                <h1>Pogoda w rodzince!</h1>
                <Slider {...settings}>
                    <div>
                        <CityWeather appid="3082473" cityName="Wejherowo" />
                    </div>
                    <div>
                        <CityWeather appid="3081368" cityName="Wroclaw" />
                    </div>
                    <div>
                        <CityWeather appid="7531002" cityName="Gdańsk" />
                    </div>
                </Slider>
            </div>
        );
    }
}

export default App;
