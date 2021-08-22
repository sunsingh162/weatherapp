import React, {useEffect, useState} from 'react';
import './css/style.css';


const Tempapp = () => {

    const [city, setCity]=useState("");
    const [search, setSearch]=useState("");

    useEffect (() => {
        const fetchApi= async () => {
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=666a205b93d5cea801b1a4f4b70c3d51`;
            const response =await fetch(url);
            const resJson=await response.json();
            console.log(resJson);

            setCity(resJson.main);
        }
        fetchApi();
    },[search])


    return (
<>
<div>
<h1>Check weather in your city..</h1>
</div>

<div className="box">
        <div className="inputData">
            <input type="search"
                   placeholder="Tap to search..."
                   className="inputField"
                   value={search}
                   onChange={ (event) => {
                    setSearch(event.target.value)
                   }} />
        </div>

        {!city ? ( 
            <p className="errorMsg">No data found</p>
        ) : (
            <div>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-search-location"></i>{search}
            </h2>

            <h1 className="temp">
            {city.temp }°Cel
            </h1>

            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel</h3>
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        </div>
        )
    
        }
        </div>
    
        </>
    )
    }

export default Tempapp
