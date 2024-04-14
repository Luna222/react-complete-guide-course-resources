import { useState, useEffect, useRef } from 'react';

const API_KEY = 'ca0ff2138a864e1fb2090905242402';

export default function Weather() {
  //❗️data, inputRef, formRef are reactive values
  const [data, setData] = useState([]);
  const inputRef = useRef(null);
  const formRef = useRef(null);

  const fetchData = () => {
    //❗️ref.current ~ DOM Element of Browser API
    const city = inputRef.current?.value
      ? inputRef.current?.value.trim().toLowerCase()
      : 'hanoi';

    const endpointUrlByCityName = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

    fetch(endpointUrlByCityName)
      .then(response => response.json())
      .then(resData => {
        const arrData = Object.entries(resData).map(([key, value]) => ({
          [key]: value,
        }));
        setData([arrData]);
      })
      .catch(err => {
        alert(`[${err.message}]. Please try to search for a valid city!`);
      })
      .finally(() => {
        formRef.current.reset();
        inputRef.current.focus();
      });
  };

  useEffect(() => {
    fetchData();
  }, [inputRef]);

  const handleClick = e => {
    e.preventDefault();
    setData([]);
    fetchData();
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
          <button type="submit" onClick={handleClick}>
            Submit (will move Focus to the input)
          </button>
        </form>

        {/* Display fetched data */}
        {data.length > 0 ? (
          data.map((item, index) => (
            <p key={index}>
              <b className="color-blue">City:</b> {item[0]?.location?.name}{' '}
              <br />
              <b className="color-blue">Condition:</b>{' '}
              <img
                className="mt-1"
                src={item[1]?.current?.condition?.icon}
                alt="weather today"
                width="50px"
              />
              {item[1]?.current?.condition?.text.toUpperCase()}
              <br />
              <b className="color-blue">Temp (°C):</b>{' '}
              {item[1]?.current?.temp_c} <br />
              <b className="color-blue">Wind (km/h):</b>{' '}
              {item[1]?.current?.wind_kph} <br />
              <b className="color-blue">Humidity (%):</b>{' '}
              {item[1]?.current?.humidity}
            </p>
          ))
        ) : (
          <p>Loading...</p>
        )}
        {/* <p>{JSON.stringify(data)}</p> */}
      </div>
    </>
  );
}

/* 📌 When rendering a list of elements in React, it's important to include a unique ✨key attribute for each item in the list. This helps React efficiently update and re-render the list when changes occur.

The key attribute serves as a unique identifier for each item in the list. React uses the key to keep track of the individual elements and optimize the rendering process. When an item in the list changes, React can quickly identify and update only the specific item, rather than re-rendering the entire list. */

/*
《💚 Here's how you can write a Function Component using the useEffect hook to fetch data with Effect》
  In this example, the useEffect hook is used with an empty dependency array []. This mimics the behavior of componentDidMount, as the effect will only run once, after the component has rendered. You can place your setup tasks, data fetching, or subscriptions inside the useEffect callback function.

  The optional cleanup function in the useEffect hook is equivalent to componentWillUnmount and runs before the component is unmounted or updated. You can use it to unsubscribe from services, cancel ongoing operations, or perform any necessary cleanup tasks.

  By using the useEffect hook, you can achieve the same functionality as componentDidMount without having to manually call the method.
*/
function MyComponent() {
  useEffect(() => {
    // Perform setup tasks, data fetching, or subscriptions to services
    // ❗️This code will run after the component has rendered

    // Cleanup tasks (optional)
    return () => {
      // Unsubscribe from services or cancel ongoing operations
      // This code will run before the component is unmounted or updated
    };
  }, []); // Empty dependency array to mimic componentDidMount

  // Render component UI
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is my React component.</p>
    </div>
  );
}
