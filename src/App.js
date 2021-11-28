import logo from './logo.svg';
import './App.css';

let WavesKeeper = window.WavesKeeper




function App() {


  const authenticate = () => {
    console.log("About to authenticate");
    const authData = { data: "Auth on my site" };
    if(WavesKeeper){
      WavesKeeper.auth(authData).then(
        auth => {
          console.log(auth);
        })
        .catch(err => console.error(err));
    } else{
      alert("Please install WaveKeeper");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Waves
        </p>
        <div>
          <button onClick={authenticate}>Authenticate</button>
        </div>
      </header>
    </div>
  );
}

export default App;
