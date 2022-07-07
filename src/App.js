import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [ms, setms] = useState();

  useEffect(() => {
    function calc () {
      const res = 50 / (1.65 * 1.65);
      console.log(res)

      if (res < 18.5 ){
        //console.log('if 1');
        setms('Abaixo do peso');
      }
  
      if (res >= 18.5 && res <= 24.9 ){
       // console.log('if 1');
        setms('Normal');
      }
      if (res >= 25 && res <= 29.9 ){
       //console.log('if 2');
        setms('Sobrepeso');
      }
  
      if (res > 30 ){
        //console.log('if 3');
        setms('Obesidade');
      }
    }
    calc();
    console.log('O IMC de Maria está '+ms);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{ms}</h1>
        <p>Uhuuulll!!</p>
        <h2> Funcionou gatinha hehe!!!</h2>
      </header>
    </div>
  );
}

export default App;
