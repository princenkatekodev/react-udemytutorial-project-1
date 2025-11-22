import logo from '../assets/react-core-concepts.png';

// dynamic content for header paragraph
const reactDescriptions = ['Fundamental', 'Core', 'Essential'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}