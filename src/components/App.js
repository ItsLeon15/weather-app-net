import React from 'react';
import styled from 'styled-components';
import SearchCity from './SearchCity';
import device from '../responsive/Device';
import Result from './Result';
import NotFound from './NotFound';

const AppTitle = styled.h1`
  display: block;
  height: 0px;
  margin: 0;
  padding: 0px 0;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
  transition: 0.3s 1.4s;
  opacity: ${({ showLabel }) => (showLabel ? 1 : 0)};
  ${({ secondary }) =>
        secondary &&
        `
    opacity: 1;
    height: auto;
    position: relative;
    padding: 20px 0;
    font-size: 30px;
    top: 20%;
    text-align: center;
    transition: .5s;
    @media ${device.tablet} {
      font-size: 40px;
    }
    @media ${device.laptop} {
      font-size: 50px;
    }
    @media ${device.laptopL} {
      font-size: 60px;
    }
    @media ${device.desktop} {
      font-size: 70px;
    }
    
  `}
  ${({ showResult }) =>
        showResult &&
        `
    opacity: 0;
    visibility: hidden;
    top: 10%;
  `}
`;

const WeatherWrapper = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  height: calc(100vh - 64px);
  width: 100%;
  position: relative;
`;

class App extends React.Component {
    state = {
        value: '',
        weatherInfo: null,
        error: false,
        thisImgNew: '',
    };

    handleInputChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSearchCity = e => {
        e.preventDefault();
        const APIkey = "33c92b0552e0eea71460739025382726";
        const units = "metric";
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&APPID=${APIkey}&units=${units}`;
        //const weather = `https://api.openweathermap.org/data/2.5/onecall?&units=${units}&exclude=minutely&appid=${APIkey}&lat=${latitude}&lon=${longitude}`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast/?q=${e.target.value}&APPID=${APIkey}&units=${units}`;

        Promise.all([fetch(weather), fetch(forecast)])
            .then(([res1, res2]) => {
                if (res1.ok && res2.ok) {
                    return Promise.all([res1.json(), res2.json()]);
                }
                throw Error(res1.statusText, res2.statusText);
            })
            .then(([data1, data2]) => {
                const months = [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ];
                const days = [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ];
                const daysshort = [
                    'Sun',
                    'Mon',
                    'Tue',
                    'Wed',
                    'Thu',
                    'Fri',
                    'Sat'
                ];

                const currentDate = new Date();
                const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
                    }`;
                const dateshort = `${daysshort[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]
                    }`;
                const sunset = new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 4);
                const sunrise = new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 4);

                const weatherInfo = {
                    city: data1.name,
                    country: data1.sys.country,
                    date,
                    dateshort,
                    description: data1.weather[0].description,
                    main: data1.weather[0].main,
                    temp: data1.main.temp,
                    highestTemp: data1.main.temp_max,
                    lowestTemp: data1.main.temp_min,
                    sunrise,
                    sunset,
                    clouds: data1.clouds.all,
                    humidity: data1.main.humidity,
                    wind: data1.wind.speed,
                    forecast: data2.list,
                };
                console.log(data1.weather[0].main);



                let weather = data1.weather[0].main;
                const thisImg = ["https://wallpaperaccess.com/full/2033952.jpg", "", ""];
                var thisImgNew;
                if (weather === "Clouds") {
                    thisImgNew = thisImg[0];
                } else if (weather === "") {
                    thisImgNew = thisImg[1];
                } else if (weather === "") {
                    thisImgNew = thisImg[2];
                } else {
                    thisImgNew = thisImg[0];
                }
                // const note = document.querySelector('bgImg');
                // note = 'url(' + thisImgNew + ')';
                this.state = {
                    backgroundImage: `url(${thisImgNew})`,
                };
                
                console.log("Weather: " + weather);
                console.log("Image: " + thisImgNew);

                this.setState({
                    weatherInfo,
                    error: false,
                });
            })
            .catch(error => {
                console.log(error);

                this.setState({
                    error: true,
                    weatherInfo: null,
                });
            });
    };

    render() {
        const { value, weatherInfo, error } = this.state;
        const firstImage = "https://wallpaperaccess.com/full/2033952.jpg";
        x === "Test";
        if (x === "Test") {
            this.setState({ backgroundImage: firstImage });
          }

        return (
            <>
                <div style={{ backgroundImage: this.state.backgroundImage }} />
                <AppTitle showLabel={(weatherInfo || error) && true}></AppTitle>
                <WeatherWrapper>
                    <AppTitle secondary showResult={(weatherInfo || error) && true}>Weather<br /></AppTitle>
                    <SearchCity
                        value={value}
                        showResult={(weatherInfo || error) && true}
                        change={this.handleInputChange}
                        submit={this.handleSearchCity}
                    />
                    {weatherInfo && <Result weather={weatherInfo} />}
                    {error && <NotFound error={error} />}
                </WeatherWrapper>
            </>
        );
    }
}

export default App;
