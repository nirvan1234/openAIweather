import { Button } from 'bootstrap';
import React,{useEffect, useState} from 'react'

const About = () => {

    const [cityData, setCityData] = useState({});
    const [cityName, setCitName] = useState("");

    console.log(cityName);

    useEffect(() =>{
        Entercity()
    },[])

    const Entercity =  async () =>{
        console.log(cityName);
        let cityVal = cityName;

        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=d6976020e561513dc126e9bede48d8c6`)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        setCityData(result);
      });
        
        
    }





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
         <button className="button button4" onClick={Entercity}>
            Search
          </button>
        
      </div>
             
             

             <div class="tempInformation">
                 <div class="top_layer">
                     <p id="day">Tuesday</p>
                    <p id="today_data">Date</p>
                 </div>

             <div class="main_layer">
                 <p id="city_name">Get Output Here</p>
                 <div class="middle_layer data_hide">
                    <p id="temp"><span>16.49</span><sup>o</sup>C</p>
                    <p id="temp_status"><i class="fa fa-cloud" aria-hidden="true"></i></p>
                 </div>

             </div>
        
        </div>
         </div>
         </div>
         </div>
  )
}


export default  About;