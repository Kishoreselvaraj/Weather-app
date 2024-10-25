import React from 'react'
import './Content.scss'

function Content({city}) {
  return (
    <div className='weatherShow'>
        <img className="weather-icon" src="https://static.vecteezy.com/system/resources/previews/024/825/182/non_2x/3d-weather-icon-day-with-rain-free-png.png" alt="Weather icon" />
        <h1 className='temp'>{city?.main?.temp}°C</h1>
        <h2 className='city'>{city?.name}</h2>
        <div className='latitude'>
            <p>Latitude :{city?.coord?.lat}</p> 
            <p> Longitude :{city?.coord?.lon}</p>
        </div>
        
    </div>
  )
}

export default Content