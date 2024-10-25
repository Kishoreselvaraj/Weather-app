import React from 'react'
import './Details.scss'

function Details({city}) {
  return (
    <div className="details">
            <div  className="col det">
                <img className="humi" src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png" />
                <div className="info">
                <p className="humidity">{city?.main?.humidity}</p>
                <p>Humidity</p>
                </div>
            </div>
            <div className="col det">
                <img className='speed' src="https://cdn-icons-png.flaticon.com/512/136/136712.png" />
                <div className="info">
                <p className="wind">{city?.wind?.speed} km/h</p>
                <p>Wind Speed</p>
                </div>
            </div>
    </div>
  )
}

export default Details