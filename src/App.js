import { useState } from 'react';
import './App.css';
import Canvas from './Canvas';

const App = () => {


  const [shownDivider, setShownDivider] = useState(2);
  const [divider, setDivider] = useState(2);
  const [counter, setCounter] = useState(0);
  const [shape, setShape] = useState('triangle');

  const handleDividerChange = (e) => {
    // console.log('handleDividerChange fired');
    // console.log(typeof e.target.value);
    e.preventDefault();
    setShownDivider(e.target.value);
    setDivider(e.target.value);
    // console.log(divider);
  };

  const submitDivider = (e) => {
    e.preventDefault();
    // console.log('submitDivider fired');
    setCounter(0);
    setDivider(shownDivider);
  };

  const submitTriangle = (e) => {
    e.preventDefault();
    setShape('triangle');
  };

  const submitSquare = (e) => {
    e.preventDefault();
    setShape('square');
  };


  return (
    <div className="App">
      <form onSubmit={submitDivider}>
        <label>
          Divider:
          <input
            type="text"
            value={shownDivider}
            name="shownDivider"
            onChange={handleDividerChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <button onClick={submitTriangle}>Triangle</button>
      <button onClick={submitSquare}>Square</button>
      <Canvas divider={divider} counter={counter} setCounter={setCounter} shape={shape} />
    </div>
  );
};

export default App;
