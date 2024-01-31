import { Button } from 'bootstrap';
import React,{useEffect, useState} from 'react'
import './App.css';

const About = () => {

    const [cityData, setCityData] = useState({});
    const [cityName, setCitName] = useState("");

    

    console.log(Object.keys(cityData).length);

    useEffect(() =>{
        Entercity()
    },[cityName])

    const Entercity =  async () =>{
        console.log(cityName);
        let cityVal = cityName;

        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d6976020e561513dc126e9bede48d8c6`)
      .then(res => res.json())
      .then(result => {
        
        setCityData(result);
      });
        
        
    }




      console.log("isObjectEmpty",cityData);




  return (
     <div class = "continer-fluid main_header">
        <div class = "row">
         <div class = "col-md-10 col-12 mx-auto">



         <div className='search_bar'>
      <input
          type="text"
          placeholder="Enter your city name"
          value={cityName}  
          onChange={(e) => setCitName(e.target.value)}
          className='search_bar_input'
          
          />
     <div className='giveHeight'>
     <button className="btn btn-primary" onClick={Entercity}>
          <span className="btn-label">Search</span>
        </button>
        
     </div>
         
      </div>
             
             

             <div class="tempInformation">
                 <div class="top_layer">
                     <p id="day">Tuesday</p>
                    <p id="today_data">Date</p>
                 </div>

             <div class="main_layer">
             <p id="city_name">Your City <span>: {cityData.cod == 200 ? cityData.name : ""}</span></p>

                 <p id="city_name">Today Weather<span>: {cityData.cod == 200 ? cityData.weather[0].main : ""}</span> </p>

                 <p id="city_name">Min Temp<span>: {cityData.cod == 200 ? cityData.main.temp_min : ""}</span> </p>

                 <p id="city_name">Max Temp<span>: {cityData.cod == 200 ? cityData.main.temp_max : ""}</span> </p>

                 <p id="city_name">Humidity<span>: {cityData.cod == 200 ? cityData.main.humidity : ""}</span> </p>

                 <p id="city_name">wind Speed<span>: {cityData.cod == 200 ? cityData.wind.speed: ""}</span> </p>
               
             

             </div>
        
        </div>
         </div>
         </div>
         </div>
  )
}


export default  About;