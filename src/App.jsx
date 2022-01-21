import React,{useState,useRef} from 'react';
import Weather from './components/Weather.jsx';

const App = () => {

  const api_url = 'https://api.openweathermap.org/data/2.5/weather?';
  const api_key = 'd9cfbe8becc1b08093e6a506fdee6bdb';

  const [city,setCity] = useState("");
  const [data, setData] = useState([]);
  const [unit, setUnit] = useState("metric");

  const getCity = useRef();
  const getUnit = useRef();

  const checkUnit = (e) => {
    e.preventDefault();
    setUnit(e.target.value);
  }
  
  const checkSubmit = (e) => {
    e.preventDefault();
    setCity("");
    console.log(unit);
    getCity.current.value = "";

    fetch(`${api_url}units=${unit}&q=${city}&appid=${api_key}`)
    .then(response => response.json())
    .then(response => {
      setData([response]);
    })
    .catch(err => {
      console.log(err);
    })

  }

  const setCityToState = (e) => {
    setCity(e.target.value);
  }

  return(
    <>
      <h1 className="text-[50px] text-black-400 text-center font-semibold">
        Weather App
      </h1> 
      <form className="text-center mt-6" onSubmit={checkSubmit}>
        <input 
          type="text" 
          name="location" 
          placeholder="Enter your city name"
          ref={getCity}
          onChange={setCityToState}
        />
        <button type="submit" className="">
          <i className="bi bi-search"></i>
        </button>

        <select name="metric" id="" className="ml-5" ref={getUnit} onChange={checkUnit}>
          <option value="metric">Celcius</option>
          <option value="imperial">Fahrenheit</option>
        </select>
      </form>
      {data.length !== 0 ?(
        <Weather wData={data} unit={unit}/>
      ):(
        <div className="default text-3xl font-sans text-center mt-5">
          Nothing to show here
        </div>
      )}
    </>
    
  )
}

export default App;