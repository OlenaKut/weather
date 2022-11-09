import React from "react";
import { Button, Card } from "semantic-ui-react";
import moment from "moment";
import "./App.css";
import LikeButton from "./LikeButton";

const refresh = () => {
  window.location.reload();
};

function Component({ weatherData }) {
  return (
    <div className="main">
      <Card.Content>
        <div>
          <Button
            className="button"
            inverted
            color="grey"
            circular
            icon="refresh"
            onClick={refresh}
          ></Button>
          <Card.Header className="header"> {weatherData.name}</Card.Header>
          <p className="description">
            Description: {weatherData.weather[0].description}
          </p>
        </div>
        <hr />
        <div className="section">
          <p className="temp">
            Temperature:{" "}
            <span className="data">
              <span className="numb">{Math.round(weatherData.main.temp)} </span>
              °C
            </span>{" "}
          </p>
          <p className="wind">
            Wind:{" "}
            <span className="data">
              <span className="numb">{weatherData.wind.speed}</span> m/s
            </span>
          </p>
          <p className="pressure">
            Pressure:{" "}
            <span className="data">
              <span className="numb">{weatherData.main.pressure}</span> mb
            </span>
          </p>
          <hr />
          <div className="flex">
            <p className="sunrise">
              Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </p>
            <p className="sunset">
              Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                "en-IN"
              )}
            </p>
          </div>
        </div>
        <hr />
        <p className="day">
          {moment().format("dddd")} {moment().format("LLL")}
        </p>
        <LikeButton />
      </Card.Content>
    </div>
  );
}

export default Component;
