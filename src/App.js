
import { useState } from 'react';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import InputShortener from './InputShortener';
import Link from './Link';

function App() {
 const [inputValue, setInputValue] = useState("")


  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue}/>
      <BackgroundAnimate/>
      <Link inputValue ={inputValue}/>
     
    </div>
  );
}

export default App;
