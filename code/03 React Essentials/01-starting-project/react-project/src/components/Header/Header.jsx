import './Header.css';
import styles from '../../pages/Demo/Demo.module.css';
import reactImg from '../../assets/react-core-concepts.png';
// import componentsImg from '../assets/components.png';
//❗️'reactImg' var points at the image (path)
/*
🔺 importing an image file into a JavaScript file is NOT something you can normally do in regular JavaScript
  📍but it work here bc of the 🏗Build Process (w/ Build Tool like Vite, Parcel, etc)
    --> being included in the Deployable file bundle
  📍JSX code work also because of the 🏗Build Process transpilling it into JavaScript code
*/

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* 👉 set dynamic HTML attribute (e.g. src={expression}) */}
      <img src={reactImg} alt="Stylized atom" />

      <h1 className={styles['header-h1']}>React Essentials</h1>

      {/* 👉 render dynamic output value in a Component */}
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
