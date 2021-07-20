import React from 'react'

function DisplayWeather({data}) {
    
    return (
        <div >
            {data &&
            <h1>Temperature for {data.name} is {data.main.temp}K </h1>}
        </div>
    )
}

export default DisplayWeather
   