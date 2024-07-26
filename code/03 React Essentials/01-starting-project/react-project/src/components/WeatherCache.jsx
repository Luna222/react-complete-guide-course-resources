import { useState, useEffect, useRef } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/common';

const API_KEY = 'ca0ff2138a864e1fb2090905242402';
const KEY_CACHE = 'WEATHER_DATA';
const CACHE_EXPIRATION_KEY = `${KEY_CACHE}_expiration`;

export default function WeatherCache() {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const fetchData = async city => {
    const endpointUrlByCityName = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    try {
      const response = await fetch(endpointUrlByCityName);
      const resData = await response.json();

      const arrData = Object.entries(resData).map(([key, value]) => ({
        [key]: value,
      }));
      setData(arrData);

      //👉 Cache the fetched weather data & set the cache to expire after 30ms (1800s):
      setLocalStorage(KEY_CACHE, arrData);
      setLocalStorage(CACHE_EXPIRATION_KEY, Date.now() + 1800 * 1000);
    } catch (err) {
      alert(`[${err.message}]. Please try to search for a valid city!`);
    } finally {
      formRef.current.reset();
      inputRef.current.focus();
    }
  };

  //⭐️ Effect will be executed after this React component is mounted/rendered
  useEffect(() => {
    // This is where the side effect happens
    const cachedData = getLocalStorage(KEY_CACHE, []);
    const cacheExpiration = getLocalStorage(CACHE_EXPIRATION_KEY, 0);

    /*
    On component mount, the effect checks if cached data is available and valid (not expired). If valid cached data is found, it sets the data from the cache. Otherwise, it fetches data for the default city ('hanoi').
    */
    if (cachedData.length > 0 && Date.now() < cacheExpiration) {
      setData(cachedData);
    } else {
      fetchData('hanoi');
    }
  }, []);

  const handleClick = e => {
    e.preventDefault();
    const city = inputRef.current?.value.trim().toLowerCase();
    if (city) {
      fetchData(city);
    }
  };

  return (
    <>
      <div>
        <h1 className="heading">Weather App 🌦</h1>
        <form ref={formRef}>
          <input
            type="text"
            placeholder="Search for a city"
            ref={inputRef}
            autoFocus
          />
          <button type="submit" className="primaryBtn" onClick={handleClick}>
            Submit (will move Focus to the input)
          </button>
        </form>

        {data.length > 0 ? (
          <div>
            <p>
              <b className="color-blue">City:</b> {data[0]?.location?.name}
            </p>
            <p>
              <b className="color-blue">Condition:</b>
              <img
                className="mt-1 mx-auto"
                src={data[1]?.current?.condition?.icon}
                alt="weather today"
                width="50px"
              />
              {data[1]?.current?.condition?.text.toUpperCase()}
            </p>
            <p>
              <b className="color-blue">Temp (°C):</b>{' '}
              {data[1]?.current?.temp_c}
            </p>
            <p>
              <b className="color-blue">Wind (km/h):</b>{' '}
              {data[1]?.current?.wind_kph}
            </p>
            <p>
              <b className="color-blue">Humidity (%):</b>{' '}
              {data[1]?.current?.humidity}
            </p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
