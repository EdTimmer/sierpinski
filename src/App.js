import { useState } from 'react';
import './App.css';
import Canvas from './Canvas';

const App = () => {


  const [shownDivider, setShownDivider] = useState(2);
  const [divider, setDivider] = useState(2);
  const [counter, setCounter] = useState(0);
  const [shape, setShape] = useState('triangle');
  const [repetitions, setRepetitions] = useState(5000);
  const [shownRepetitions, setShownRepetitions] = useState(5000);

  const handleDividerChange = (e) => {
    e.preventDefault();
    setShownDivider(e.target.value);
  };

  const submitParameters = (e) => {
    e.preventDefault();
    setCounter(0);
    setDivider(shownDivider);
    setRepetitions(shownRepetitions);
  };

  const handleShownRepetitionsChange = (e) => {
    e.preventDefault();
    setShownRepetitions(e.target.value);
  }

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
      <form onSubmit={submitParameters}>
        <label>
          Divider:
          <input
            type="number"
            value={shownDivider}
            name="shownDivider"
            onChange={handleDividerChange}
          />
        </label>
        <label>
          Repetitions:
          <input
            type="number"
            value={shownRepetitions}
            name="shownRepetitions"
            onChange={handleShownRepetitionsChange}
          />
        </label>

        <button onClick={submitTriangle}>Triangle</button>
        <button onClick={submitSquare}>Square</button>
        <div className="">{shape}</div>
        <input type="submit" value="Submit" />
      </form>
      <Canvas
        divider={divider}
        counter={counter}
        setCounter={setCounter}
        shape={shape}
        repetitions={repetitions}
      />
    </div>
  );
};

export default App;
