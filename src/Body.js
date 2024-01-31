import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Body() {
    const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /about
    navigate('about');
  };


  return (

    <div class = "continer-fluid main_header">
    <div class = "row">
     <div class = "col-md-10 col-12 mx-auto">
         <div class= "row">

        <div class = "col-md-6 col-12 main_header_left">
            <p> Welcome to Weather App</p>
            <h1> Get the Latest <span>Weather </span>info of the city </h1>
            
                 <button onClick={navigateToContacts}> Check Now</button>
           
        </div>


        <div class = "col-md-6 col-12 main_header_right">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img class="w-100" src="https://www.reallusion.com/ContentStore/CTA/Pack/G3-Animation-Suite-Weather-Maker/images/main_1440.jpg" alt="First slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="w-100" src="https://en.islcollective.com/preview/201801/f/weather-flash-cards-animated-classroom-posters-flashcards-icebreakers-picture-d_103778_1.jpg" alt="Second slide" />
                  </div>
                  <div class="carousel-item">
                    <img class="w-100" src="https://www.reallusion.com/ContentStore/image/cta/ACR300DIENU050120180320001/T_ACR300DIENU05012018032000120180321085851357.jpg" alt="Third slide" />
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
        </div>
    </div>
    
    </div>
     </div>
     </div>
    

   
        
  )
}
