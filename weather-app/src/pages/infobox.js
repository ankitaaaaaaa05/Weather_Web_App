import Card from "@mui/material/Card";

export default function InfoBox({ info }) {
  let INIT_URL =
    "https://images.unsplash.com/photo-1696048631846-187eb20f3b9f?w=600&auto=format&fit=crop&q=60";

  let HOT_URL =
    "https://i.pinimg.com/1200x/d1/bc/42/d1bc422127d47e01cd49fc78ad19d5bd.jpg";
    

  let COLD_URL =
    "https://i.pinimg.com/736x/00/fd/f7/00fdf783bc4b3be69b36128186d17fd5.jpg";

  let RAIN_URL =
    "https://i.pinimg.com/736x/e3/56/a9/e356a9be135b130f4c9af7fb2fb89ddd.jpg";

  return (
    <div className="InfoBox" >
      <div className="cardContainer" style={{}}>
        <Card sx={{ maxWidth: 345, margin:"0 auto",marginTop:"30px" }}>
          <img
            src={
              info.humidity > 80
                ? RAIN_URL
                : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            alt="weather"
            height= "170"
          />
          <div>
            <h2>{info.city}</h2>
            <p>Temperature = {info.temp}°C</p>
            <p>Minimum Temperature = {info.tempMin}°C</p>
            <p>Maximum Temperature = {info.tempMax}°C</p>
            <p>Humidity = {info.humidity}</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and
              feels like {info.feelslike}°C
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
