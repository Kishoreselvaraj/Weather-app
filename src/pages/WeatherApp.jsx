import React, { useEffect } from 'react'
import { useState } from 'react'
import Search from '../components/Search/Search'
import Content from '../components/WeatherComponents/Content'
import Details from '../components/Details/Details'
function WeatherApp() {
  const [search, setsearch] = useState('chennai')
  const [city, setcity] = useState(null)
  // console.log(search)

  const getWeatherdata = async (search) => {
    try {
      // console.log(search)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=77248e326e45d981c4da0a50544fa6cb&units=metric`);
      
      if (!response.ok) {
          console.log("error")
      }

      const result = await response.json();
      setcity(result); 
      console.log(result, "result");
  }
   catch (error) {
      console.error("Failed to fetch weather data:", error);
  }

  }
  useEffect(()=>{
    getWeatherdata(search)
  },[search])
  return (
    <div className='weather'>
      <div className="whetherCard">
        <Search 
        setsearch={setsearch}/>
        <Content 
        city={city}/>
        <Details city={city}/>
      </div>

    </div>
  )
}

export default WeatherApp