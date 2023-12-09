import axios from 'axios';
import {useRef, useState} from 'react';
import "./home.css";


const Home =()=>{
    //not recommended
    // const [cityName , setCityName] = useState("");
    const [weatherData , setWeatherData] = useState(null);        
    const cityNameRef = useRef(null);
    
    const submitHandler = async(e)=>{
        e.preventDefault();
        console.log("City_Name : ",cityNameRef.current.value); 
        let API_key ="3f7877f8ebe16c53f9790cade7096986";
    try{
        const response = await axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityNameRef.current.value}&units=metric&appid=${API_key}`);
        console.log(response.data);
        setWeatherData(response.data);
        // document.querySelector("#temp").innerHTML ="<center>" + "Temperature is : " + response.data.main.temp + "</center>"
        // document.querySelector("#humidity").innerHTML = "<center>" +  "Humidity is : "  +  response.data.main.humidity + "</center>"
        // document.querySelector("#temp_max").innerHTML = "<center>" +  "Temperature_Max is : "  +  response.data.main.temp_max + "</center>"
        // document.querySelector("#temp_min").innerHTML = "<center>" +  "Temperature_Min is : "  +  response.data.main.temp_min + "</center>"
    
    }catch(error) {
        console.log(error);
    }
    };

    return ( 
        <center><div className='container1'>
            <form onSubmit={submitHandler}>
                {/* <label htmlFor="cityName">City Name : </label> */}
                <input 
                    placeholder='City Name'
                    type="text" 
                    id="cityName"
                    minLength={2} 
                    maxLength={20} 
                    required 
                    // onChange={(e)=>setCityName(e.target.value)}
                    ref={cityNameRef}
                    />
                    <br /><br />
                <button className='btn' type="submit">Get Weather</button>
            </form><br />
            <hr /><br />
        {(weatherData)? (
            <center><div className='secondContainer'>
                City Name : {weatherData?.name}
                <br />
                Country : {weatherData?.sys?.country}
                <br />
                Temperature : {weatherData?.main?.temp}
                <br />
                Humidity : {weatherData?.main?.humidity}
                <br />
                Wind speed : {weatherData?.wind?.speed}
                <br />
                {/* weather : {weatherData.weather[0].description}  */}
            </div></center>
        ):( 
            <div>No Data</div>
        )}
            
        </div></center>
    );
};
export default Home;