/*
💚 Vite Bundler/Build Tool will automatically find the path to these Modules (e.g. react) & import them (this works for ES6 & CommonJS Modules)*/
import React, { useState, useRef } from 'react'; //👉 import Namespaces (React, Map,...) & Modules
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Map from './components/Map.jsx';
import Weather from './components/Weather.jsx';
import Expenses from './pages/Expenses/Expenses.jsx';
import Demo from './pages/Demo/Demo.jsx';
import AuthInputsCssModules from './pages/AuthInputs/AuthInputsCssModules.jsx';
import AuthInputsStyledComponent from './pages/AuthInputs/AuthInputsStyledComponent.jsx';
import AuthInputsTailwind from './pages/AuthInputs/AuthInputsTailwind.jsx';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const user1 = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  favFoods: [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ],
};

const user2 = {
  name: 'Katherine Johnson',
  imageUrl: 'https://i.imgur.com/MK3eW3Am.jpg',
  imageSize: 90,
  favFoods: [
    { title: 'Curd Tart', isFruit: false, id: 1 },
    { title: 'Spinach', isFruit: false, id: 2 },
    { title: 'strawberry ', isFruit: true, id: 3 },
  ],
};

/*
[🌻 Custom Hooks]:
  Custom hooks allow you to encapsulate reusable logic in a single place, making it easier to share and reuse across different components. Here's an example of a custom hook:
*/
function useCounter(initCount, step) {
  const [count, setCount] = useState(initCount);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return [count, increment, decrement];
}

/*
《 👉 Create [🌸 React Function Components]》:
  React Function Components are regular JavaScript functions that return JSX Markup (They can accept arbitrary inputs—called “props”)

  📌 The curly braces {} allow us to embed JavaScript expressions within the JSX code.

  ⭐️ React Component names must always start with a capital letter, while HTML tags must be lowercase
*/

function MyButton() {
  /*
  👉 Using [🌸 React built-in Hooks]:
    📌 Functions starting with 'use' are called Hooks

    📌 Hooks are primarily designed to be used in Functional Components (NOT Class Components)

    📌 Hooks are more restrictive than other functions. 
    ❗️You can only call Hooks at the TOP level of your components (or other Hooks).

    (If you want to use useHookFunc in a condition or a loop, extract a new component and put it there)

    🔸useState, 🔸useEffect are built-in Hooks provided by React
  */

  //🔸useState(inititialState, setStateFn) Hook >>:
  const [count, setCount] = useState(0);

  //👍 use the 'count' state variable to dynamically update the button's text
  let btnContent = `I'm a Button`;

  if (count > 0)
    btnContent += `. And you just clicked me x${count} time(s)! 💚`;

  /*
  👉 You can respond to events by ❗️declaring event handler functions INSIDE your Components:

    Notice how onClick={handleClick} has no parentheses at the end! Do not call the event handler function: ❗️you only need to pass the Function Expession (value) down

    📌 React will call ✨eventHandler (callBackFn) WHEN the user clicks the button & the 'click' Event is triggered.
  */
  function handleClick(e) {
    // alert('You clicked me! 💚');
    console.log(e.type, e.target);

    //⭐️ if setCount state didn't get changed, --> ❗️React will NOT *re-rendering main Component
    setCount(count + 1);

    /*
     ❌ the modification to btnContent will NOT cause the button's text to change because React does not detect this as a state change that requires *re-rendering the component.
    */
    // btnContent += `. And you just clicked me x${count} time(s)! 💚`;
  }

  return (
    <button className="primaryBtn" onClick={handleClick}>
      {btnContent}
    </button>
  );
}

/*
  👀 MyCounter Component can accepts an Object as an argument and extracted the 'count' property from it using object destructuring ({ count }): function MyCounter({ count }) {}
*/
function Description({ count, onClick }) {
  return (
    <p>
      <span style={{ color: '#a61e4d', fontWeight: 'bold' }} onClick={onClick}>
        {count} (click me ♥️)
      </span>
      <br></br>
      <br></br>
      <a
        href="https://react.dev/learn#sharing-data-between-components"
        style={{ background: '#f1f3f5' }}
      >
        Sharing data between Components
      </a>{' '}
      to make diff Components display the SAME 'count' and update TOGETHER{' '}
      <span style={{ color: '#5f3dc4' }}>
        by “lifting state up” — move the state (props/state vars like 'count'
        changes) from the individual Components “upwards” to the closest
        Component containing all of them (Parent Component)
      </span>
    </p>
  );
}

/*
📌 [🌸 props Object] (standing for "properties")
  the 'props' Object in React is a special JavaScript object that can be passed into a Component as an argument
  
  💚 it allows you to pass data (attributes) from a Parent Component to its Child Component:
    (
      「🕰 when you use a Child/Inner Component in Parent Component's JSX code」:
        --> 👍 can pass 'attributes=data' into the Component tag
        --> ❗️These attributes are then accessible within the Child Component through the props object

        e.g. <MyCounter
                count={count}
                increCount={increment}
                decreCount={decrement}
              />
    )

  🔖 'props' Object is 🔺read-only, meaning that you should NOT modify its values directly within the component. 
  (Instead, you can use state or other techniques to manage component-specific data.)
 */
function MyCounter(props) {
  return (
    <div>
      {/* <p>Count: {props.count}</p> */}
      <button
        onClick={props.increCount}
        style={{ color: '#a61e4d', background: 'var(--bg_secondary)' }}
      >
        +
      </button>
      <button
        onClick={props.decreCount}
        style={{ color: '#a61e4d', background: 'var(--bg_secondary)' }}
      >
        -
      </button>
    </div>
  );
}

function ProfileHedy() {
  const favFoods = user1.favFoods.map(food => (
    <li key={food.id} style={{ color: food.isFruit ? '#a61e4d' : '#087f5b' }}>
      {food.title}
    </li>
  ));

  return (
    <>
      <header>
        <h1>{user1.name}</h1>
      </header>
      <Welcome />
      <img
        className="avatar"
        src={user1.imageUrl}
        alt={'Photo of ' + user1.name}
        //❗️ style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces
        style={{
          width: user1.imageSize,
          height: user1.imageSize,
        }}
      />
      <span style={{ display: 'inline-block', marginLeft: '2rem' }}>
        <h3>Fav Foods:</h3>
        <ul style={{ listStylePosition: 'outside', textAlign: 'left' }}>
          {favFoods}
        </ul>
      </span>
    </>
  );
}

function ProfileKath() {
  const favFoods = user2.favFoods.map(food => (
    <li key={food.id} style={{ color: food.isFruit ? '#a61e4d' : '#e67700' }}>
      {food.title}
    </li>
  ));

  return (
    <>
      <header>
        <h1>{user2.name}</h1>
      </header>
      <Welcome />
      <img
        className="avatar"
        src={user2.imageUrl}
        alt={'Photo of ' + user2.name}
        //❗️ style={{}} is not a special syntax, but a regular {} object inside the style={ } JSX curly braces
        style={{
          width: user2.imageSize,
          height: user2.imageSize,
        }}
      />
      <span style={{ display: 'inline-block', marginLeft: '2rem' }}>
        <h3>Fav Foods:</h3>
        <ul style={{ listStylePosition: 'outside', textAlign: 'left' }}>
          {favFoods}
        </ul>
      </span>
    </>
  );
}

function Cities() {
  const firstCityRef = useRef(null);
  const secondCityRef = useRef(null);
  const thirdCityRef = useRef(null);

  function handleScrollToFirstCity() {
    firstCityRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToSecondCity() {
    secondCityRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCity() {
    thirdCityRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav className="mt-1">
        <button className="mr-1 primaryBtn" onClick={handleScrollToFirstCity}>
          Hanoi
        </button>
        <button className="mr-1 primaryBtn" onClick={handleScrollToSecondCity}>
          Ho Chi Minh
        </button>
        <button className="mr-1 primaryBtn" onClick={handleScrollToThirdCity}>
          Hoi An
        </button>
      </nav>
      <div>
        <ul className="city-list space-y-2.5">
          <li>
            <img
              src="https://www.travellingking.com/wp-content/uploads/2023/02/Hanoi-The-urban-development-of-capital-Hanoi-Vietnam-with-large-beside-lakes-west-skyscraper-architecture-.jpg"
              alt="hn"
              ref={firstCityRef}
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/DJI_0550-HDR-Pano.jpg/800px-DJI_0550-HDR-Pano.jpg"
              alt="hcm"
              ref={secondCityRef}
            />
          </li>
          <li className="third-child:bg-[theme('colors.teal.50')] tablet:third-child:hover:border-8 tablet:third-child:hover:border-pink-300">
            <img
              src="https://hoianfoodtour.com/wp-content/uploads/2018/06/boat-trip-along-Bach-Dang-River-river.jpg"
              alt="ha"
              ref={thirdCityRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

function Home() {
  // const [count, setCount] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(0);

  /*
    👉 Using [🌸 Custom Hook]:
      ❗️'useCounter' Hook helps us STORE and UPDATE our state variable (count)
  
      ❗️increment, decrement are eventHandlerFns
    */
  const [count, increment, decrement] = useCounter(0, 1);

  /*
    👉 React renders Component to UI (JSX Output):
      📌 React Component CANNOT return *multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper

      (--> 🚩 React will re-render *ONLY the Component with the updated State/Props—(by comparing the outputs of JSX code)
        --> Home Component will be re-rendered))
    */
  return (
    <div className="container-md">
      <div className="flex justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button
          type="button"
          id="headlessui-listbox-button-:R2lkcr6:"
          className="self-center focus:outline-none focus:border-none hover:border-none hover:bg-[#f1f3f5] ring-2 ring-[#dee2e6]/50 ring-inset"
          aria-haspopup="listbox"
          aria-expanded="false"
          data-headlessui-state="active"
          aria-labelledby="headlessui-label-:R1lkcr6: headlessui-listbox-button-:R2lkcr6:"
          data-active=""
        >
          <span className="dark:hidden">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                className="stroke-slate-400 dark:stroke-slate-500"
              ></path>
              <path
                d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                className="stroke-slate-400 dark:stroke-slate-500"
              ></path>
            </svg>
          </span>
          <span className="hidden dark:inline">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                className="fill-transparent"
              ></path>
              <path
                d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                className="fill-slate-400 dark:fill-slate-500"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                className="fill-slate-400 dark:fill-slate-500"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      {/* <h1>Vite + React</h1> */}

      {/* 👉 nest MyButton Component into another component (App): */}
      <div className="flex justify-center mb-1">
        {/* 👉 Conditional rendering */}
        <div className="mr-5">
          {count <= 7 ? <ProfileHedy /> : <ProfileKath />}
        </div>
        <div
          className="flex mr-5"
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          {/* ❗️Anytime we link to an internal path, we will use <Link> instead of <a href="">. */}
          <Link
            to="expenses"
            style={{
              color: '#f7f7f7',
              fontWeight: 'bold',
              backgroundColor: '#b197fc',
              padding: '1rem',
              borderRadius: '2rem',
            }}
          >
            💸 Check out Expenses
          </Link>
          <Link
            to="demo"
            className="mt-1"
            style={{
              color: '#f7f7f7',
              fontWeight: 'bold',
              backgroundColor: 'var(--color5)',
              padding: '1rem',
              borderRadius: '2rem',
            }}
          >
            🌻 Check out Demo
          </Link>
          <Link
            to="auth"
            className="mt-1"
            style={{
              color: '#f7f7f7',
              fontWeight: 'bold',
              backgroundColor: 'var(--color7)',
              padding: '1rem',
              borderRadius: '2rem',
            }}
          >
            🎨 Auth
          </Link>
        </div>
        <div>
          Zoom level: {zoomLevel}x
          <button onClick={() => setZoomLevel(zoomLevel + 1)}>+</button>
          <button onClick={() => setZoomLevel(zoomLevel - 1)}>-</button>
          <hr />
          <Map zoomLevel={zoomLevel} />
        </div>
      </div>

      <div className="container-sm">
        <div className="card w-full content-auto">
          <div className="flex divider justify-center">
            <div className="mr-1" style={{ width: '350px' }}>
              <Description count={count} onClick={increment} />
            </div>
            <div className="mr-1">
              {/* <button onClick={() => setCount(count => count + 1)}>
            count is {count}
          </button> */}
              <button className="primaryBtn" onClick={increment}>
                count is {count}
              </button>

              {/* ❗️Pass Component's Properties as attributes from Parent Component (Home):
              --> these attributes can be accessible within the Child Component (MyCounter) through the [🌸 props object] 
              --> ⭐️ these attributes become MyCounter Component's Properties */}
              <MyCounter
                // count={count}
                increCount={increment}
                decreCount={decrement}
              />
            </div>
            <div>
              <MyButton />
            </div>
          </div>

          <div style={{ padding: '1rem 0', background: 'var(--bg_secondary)' }}>
            <a
              className="mt-1"
              href="https://react.dev/learn/manipulating-the-dom-with-refs"
              style={{ fontWeight: 'bold' }}
            >
              ⭐️ Manipulating the DOM with Refs && <br />
            </a>
            <a
              className="mt-1"
              href="https://react.dev/reference/react/useEffect#fetching-data-with-effects"
              style={{ fontWeight: 'bold' }}
            >
              ⭐️ fetching data with Effects from API for your Component
            </a>
            <Cities />
            <Weather />
          </div>

          <p>
            Edit <code>src/App.jsx</code> and save to test H MR
          </p>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

/*
《 👉 Create [🌸 React Class Components]》:
*/
class Welcome extends React.Component {
  render() {
    return <h3>Hello! 🌻</h3>;
  }
}

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="demo" element={<Demo />} />
        {/* <Route path="auth" element={<AuthInputsCssModules />} /> */}
        {/* <Route path="auth" element={<AuthInputsStyledComponent />} /> */}
        <Route path="auth" element={<AuthInputsTailwind />} />
      </Routes>
    </Router>
  );
}

//📌 The [🌸 export default] keywords specify the ✨main Component in the file so that you can later import it from other files.
export default App;
