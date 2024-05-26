import reactImg from "./assets/react-core-concepts.png";
//❗️'reactImg' var points at the image (path)
/*
🔺 importing an image file into a JavaScript file is NOT something you can normally do in regular JavaScript
  📍but it work here bc of the 🏗Build Process (w/ Build Tool like Vite, Parcel, etc)
    --> being included in the Deployable file bundle
  📍JSX code work also because of the 🏗Build Process transpilling it into JavaScript code
*/

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* 👉 set dynamic HTML attribute (e.g. src={expression}) */}
      <img src={reactImg} alt="Stylized atom" />

      <h1>React Essentials</h1>

      {/* 👉 render dynamic output value in a Component */}
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
