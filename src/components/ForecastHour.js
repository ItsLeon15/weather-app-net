import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SmallLabel from './SmallLabel';
import Text from './Text';
import device from '../responsive/Device';

const ForecastWrapper = styled.div`
  flex-shrink: 0;
  flex-basis: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media ${device.tablet} {
    flex-basis: 110px;
  }
  @media ${device.laptop} {
    flex-basis: 125px;
  }
  @media ${device.laptopL} {
    flex-basis: 140px;
  }
`;

const WeatherIcon = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin: 0 auto;
`;

const ForecastHour = props => {
  const { temp, day, hour, icon } = props;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;






  const currentDate = new Date();
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
    'Nocvember',
    'December',
  ];

  const dateshort = `${months[currentDate.getMonth()]}`;
  if (day === "01") {
     var daynum = "1"
     var daysssss = "st"
  } else if (day === "02") {
     daynum = "2"
     daysssss = "nd"
  } else if (day === "03") {
    daynum = "3"
    daysssss = "rd"
  } else if (day === "04") {
    daynum = "4"
    daysssss = "th"
  } else if (day === "05") {
    daynum = "5"
    daysssss = "th"
  } else if (day === "06") {
    daynum = "6"
    daysssss = "th"
  } else if (day === "07") {
    daynum = "7"
    daysssss = "th"
  } else if (day === "08") {
    daynum = "8"
    daysssss = "th"
  } else if (day === "09") {
    daynum = "9"
    daysssss = "th"
  } else if (day === "10") {
    daynum = "10"
    daysssss = "th"
  } else if (day === "11") {
    daynum = "11"
    daysssss = "th"
  } else if (day === "12") {
    daynum = "12"
    daysssss = "th"
  } else if (day === "13") {
    daynum = "13"
    daysssss = "th"
  } else if (day === "14") {
    daynum = "14"
    daysssss = "th"
  } else if (day === "15") {
    daynum = "15"
    daysssss = "th"
  } else if (day === "16") {
    daynum = "16"
    daysssss = "th"
  } else if (day === "17") {
    daynum = "17"
    daysssss = "th"
  } else if (day === "18") {
    daynum = "18"
    daysssss = "th"
  } else if (day === "19") {
    daynum = "19"
    daysssss = "th"
  } else if (day === "20") {
    daynum = "20"
    daysssss = "th"
  } else if (day === "21") {
    daynum = "21"
    daysssss = "st"
  } else if (day === "22") {
    daynum = "22"
    daysssss = "nd"
  } else if (day === "23") {
    daynum = "23"
    daysssss = "rd"
  } else if (day === "24") {
    daynum = "24"
    daysssss = "th"
  } else if (day === "25") {
    daynum = "25"
    daysssss = "th"
  } else if (day === "26") {
    daynum = "26"
    daysssss = "th"
  } else if (day === "27") {
    daynum = "27"
    daysssss = "th"
  } else if (day === "28") {
    daynum = "28"
    daysssss = "th"
  } else if (day === "29") {
    daynum = "29"
    daysssss = "th"
  } else if (day === "30") {
    daynum = "30"
    daysssss = "th"
  } else if (day === "31") {
    daynum = "31"
    daysssss = "st"
  }






  return (
    <ForecastWrapper>
      <Text align="center">


        {daynum}{daysssss} {dateshort}
        

      </Text>
      
      <Text align="center">{hour}:00</Text>
      <WeatherIcon src={iconUrl} />
      <SmallLabel align="center" weight="400">
        {temp}&#176;
      </SmallLabel>
    </ForecastWrapper>
  );
};

ForecastHour.propTypes = {
  temp: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ForecastHour;
