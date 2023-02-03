import "./styles.css";

export default function Currently() {
  let weatherData = {
    city: "Tehran",
    tempreture: "6",
    date: " Sunday 13:01",
    description: "Haze",
    humidity: "33%",
    wind: "3mps",
    imgURL:
      "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/mist-day.png",
  };
  return (
    <div className="currently">
      <h1 className="cityName">{weatherData.city}</h1>
      <hr />
      <p className="CurrentLocation">Currently</p>
      <h5 className="timezone">{weatherData.date}</h5>
      <img src={weatherData.imgURL} className="mainIcon" alt="weatherIcon" />
      <div className="h2">
        <span className="h2Temp">
          <strong>{weatherData.tempreture}</strong>
        </span>
        <sup>
          <a href="/" className="active celsius">
            °C
          </a>
          <a href="/" className="fahrenheit">
            °F
          </a>
        </sup>
      </div>
      <h6 className="description"> {weatherData.description} </h6>
      <p className="humidityAndwind">
        Humidity:{weatherData.humidity} Wind:{weatherData.wind}
      </p>
    </div>
  );
}
