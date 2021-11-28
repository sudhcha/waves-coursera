import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Signer } from '@waves/signer';
import { ProviderKeeper } from '@waves/provider-keeper';




function App() {

  const [address, setAddress] = useState("pending authentication");


  const authenticate = async () => {
    console.log("About to authenticate");
    const signer = new Signer({
      // Specify URL of the node on Testnet
      NODE_URL: 'https://nodes-testnet.wavesnodes.com'
    });
    const authData = {
      data: 'server generated string',
    }
    const keeper = new ProviderKeeper(authData);
    await signer.setProvider(keeper);
    const {address, publicKey} = await signer.login();
    console.log(publicKey);
    console.log(address);
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
        <div>
          <h4>Address is {address}</h4>
        </div>
      </header>
    </div>
  );
}

export default App;
