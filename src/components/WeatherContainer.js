import React ,{useState,useEffect} from 'react'
import DisplayWeather from './DisplayWeather.'


function WeatherContainer() {

    const[city,setCity] = useState('')
    const[data,setData] = useState()

    useEffect(()=>{
        
    })

    const onClickSearch = ()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e933e63cbe1c79cbe7e1844bf80fe3f0`)
        .then(res=>res.json())
        .then(data=>setData(data))
        
        .catch(err=>console.log(err))

        setCity('')
    }

    return (
        <div className='container'>
            <input type="text" className="form-control" placeholder='Enter city name' value={city} onChange={(e)=>setCity(e.target.value)}/>
            <button onClick={onClickSearch} className='btn btn-primary form-control'>Search</button>
            <DisplayWeather data={data} city={city}/>
        </div>
    )
}

export default WeatherContainer
