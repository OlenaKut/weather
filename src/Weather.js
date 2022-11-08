import React, { useEffect, useState } from "react";
import Component from "./Components";

function Weather() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  //const url = "https://api.openweathermap.org/data/2.5";
  const key = "82914429dbcac50d79e072b0c73a8cb3";

  useEffect(() => {
    const getWeather = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
          console.log(result);
        });
    };
    getWeather();
  }, [lat, long]);

  return (
    <div>
      {typeof data.main != "undefined" ? (
        <Component weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Weather;
