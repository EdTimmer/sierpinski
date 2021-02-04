import { useState } from 'react';
import './App.css';
import Canvas from './Canvas';

const App = () => {


  const [shownDivider, setShownDivider] = useState(2);
  const [divider, setDivider] = useState(2);
  const [counter, setCounter] = useState(0);
  const [shape, setShape] = useState('pentagon');
  const [repetitions, setRepetitions] = useState(2);
  const [shownRepetitions, setShownRepetitions] = useState(2);
  const [dotSize, setDotSize] = useState(2);
  const [shownDotSize, setShownDotSize] = useState(2);
  const [startPoint, setStartPoint] = useState([30, 30]);
  const [currentPoint, setCurrentPoint] = useState(startPoint);

  const handleDividerChange = (e) => {
    e.preventDefault();
    setShownDivider(e.target.value);
  };

  const submitParameters = (e) => {
    e.preventDefault();
    setCounter(0);
    setDivider(shownDivider);
    setRepetitions(shownRepetitions);
    setDotSize(shownDotSize);
    setStartPoint([30, 30]);
    setCurrentPoint([30, 30]);
  };

  const handleShownRepetitionsChange = (e) => {
    e.preventDefault();
    setShownRepetitions(e.target.value);
  }

  const handleShownDotSizeChange = (e) => {
    e.preventDefault();
    setShownDotSize(e.target.value);
  };

  const submitTriangle = (e) => {
    e.preventDefault();
    setShape('triangle');
  };

  const submitSquare = (e) => {
    e.preventDefault();
    setShape('square');
  };

  const submitPentagon = (e) => {
    e.preventDefault();
    setShape('pentagon');
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
        <label>
          Dot Size:
          <input
            type="number"
            value={shownDotSize}
            name="shownDotSize"
            onChange={handleShownDotSizeChange}
          />
        </label>
        <br />
        <button onClick={submitTriangle}>Triangle</button>
        <br />
        <button onClick={submitSquare}>Square</button>
        <br />
        <button onClick={submitPentagon}>Pentagon</button>
        <br />
        <div className="">Selected shape: {shape}</div>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <Canvas
        divider={divider}
        counter={counter}
        setCounter={setCounter}
        shape={shape}
        repetitions={repetitions}
        dotSize={dotSize}
        startPoint={startPoint}
        currentPoint={currentPoint}
        setCurrentPoint={setCurrentPoint}
      />
    </div>
  );
};

export default App;
