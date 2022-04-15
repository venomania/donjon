import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/")
      .then((result)=>{
        console.log(result);
        setIsLoaded(true);
        setItems(result.items);
        console.log(items);
      })
      // .then(
      //   (result) => {
      //     setIsLoaded(true);
      //     setItems(result.items);
      //     console.log("lalal");
      //   },
      //   // Remarque : il faut gérer les erreurs ici plutôt que dans
      //   // un bloc catch() afin que nous n’avalions pas les exceptions
      //   // dues à de véritables bugs dans les composants.
      //   (error) => {
      //     setIsLoaded(true);
      //     setError(error);
      //     console.log(res);
      //   }
      //)
  }, [])



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
