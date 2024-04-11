/*
💚 Vite Bundler/Build Tool will automatically find the path to these Modules (e.g. react) & import them (this works for ES6 & CommonJS Modules)*/
import React, { useState, useEffect } from 'react';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

let myCount = 0;

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

  return <button onClick={handleClick}>{btnContent}</button>;
}

/*
  👀 MyCounter Component can accepts an Object as an argument and extracted the 'count' property from it using object destructuring ({ count }): function MyCounter({ count }) {}
*/

/*
📌 [🌸 props Object] (standing for "properties")
  the 'props' Object in React is a special JavaScript object that can be passed into a Component as an argument
  
  💚 it allows you to pass data (attributes) from a Parent Component to its Child Component:
    (
      「when you use a Child/Inner Component in Parent Component's JSX code」:
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
        style={{ color: '#a61e4d', background: '#f3f0ff' }}
      >
        +
      </button>
      <button
        onClick={props.decreCount}
        style={{ color: '#a61e4d', background: '#f3f0ff' }}
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
      <h1>{user1.name}</h1>
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
      <h1>{user2.name}</h1>
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

function Map() {
  /*
  🔸useEffect(setupFn, dependencies<Array>) Hook >>: 
    👍 allows you to perform side effects in Functional Components, fetching data with Effects for your Component, etc

    📌 It runs after every render and can be used for tasks like fetching data w/ Effects, connecting to an external system , or Wrapping Effects in custom Hooks, etc
  */
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
  // const [count, setCount] = useState(0);

  /*
  👉 Using [🌸 Custom Hook]:
    ❗️'useCounter' Hook helps us STORE and UPDATE our state variable (count)
  */
  const [count, increment, decrement] = useCounter(0, 1);

  /*
  👉 React renders Component to UI:
    📌 React Component CANNOT return *multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper
  */
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}
      {/* 👉 Conditional rendering */}
      {count <= 5 ? <ProfileHedy /> : <ProfileKath />}
      <div className="card">
        <div className="flex">
          <div className="mr-1">
            {/* <button onClick={() => setCount(count => count + 1)}>
              count is {count}
            </button> */}
            <button onClick={increment}>count is {count}</button>

            {/* ❗️Pass Component's Properties as attributes:
            --> these attributes can be accessible within the Child Component (MyCounter) through the [🌸 props object] 
            --> ⭐️ these attributes become MyCounter Component's Properties */}
            <MyCounter
              count={count}
              increCount={increment}
              decreCount={decrement}
            />
          </div>
          {/* 👉 nest MyButton Component into another component (App) */}
          <div>
            <MyButton />
          </div>
        </div>

        <p>
          Edit <code>src/App.jsx</code> and save to test H MR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

//📌 The [🌸 export default] keywords specify the ✨main Component in the file so that you can later import it from other files.
export default App;
