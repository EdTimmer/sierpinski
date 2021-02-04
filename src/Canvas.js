import React, { useRef, useEffect, useState } from 'react';
import './Canvas.css';

const Canvas = ({ divider, counter, setCounter, shape, repetitions, dotSize, startPoint, currentPoint, setCurrentPoint }) => {
  const canvasRef = useRef(null);

  // const [currentPoint, setCurrentPoint] = useState(startPoint);


  // const pointOne = [0, 500];
  // const pointTwo = [250, 0];
  // const pointThree = [500, 500];
  // console.log('divider in Canvas: ', divider)


  // const dotSize = 2;

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const contextTwo = canvas.getContext('2d');
  //   contextTwo.fillStyle = '#FF0000';
  // })

  useEffect(() => {
    const pointOneTriangle = [0, 500];
    const pointTwoTriangle = [250, 0];
    const pointThreeTriangle = [500, 500];

    const pointOneSquare = [0, 0];
    const pointTwoSquare = [500, 0];
    const pointThreeSquare = [500, 500];
    const pointFourSquare = [0, 500];

    const pointOnePent = [250, 0];
    const pointTwoPent = [500, 210];
    const pointThreePent = [395, 500];
    const pointFourPent = [105, 500];
    const pointFivePent = [0, 210];

    // const pointFour = [0, 250];
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // const contextTwo = canvas.getContext('2d');
    // contextTwo.fillStyle = '#FF0000';

    if (counter === 0) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      // context.fillRect(currentPoint[0], currentPoint[1], dotSize, dotSize);
      setCurrentPoint([30, 30]);
      context.fillRect(currentPoint[0], currentPoint[1], dotSize, dotSize);

    }
    context.fillRect(currentPoint[0], currentPoint[1], dotSize, dotSize);
    const shapePoints = [];
    // draw start shape points
    if (shape === 'triangle') {
      context.fillRect(30, 30, dotSize, dotSize);

      context.fillRect(
        pointOneTriangle[0],
        pointOneTriangle[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointTwoTriangle[0],
        pointTwoTriangle[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointThreeTriangle[0],
        pointThreeTriangle[1],
        dotSize,
        dotSize
      );

      shapePoints.push(pointOneTriangle);
      shapePoints.push(pointTwoTriangle);
      shapePoints.push(pointThreeTriangle);
    }

    if (shape === 'square') {
      // context.fillRect(30, 30, dotSize, dotSize);

      context.fillRect(
        pointOneSquare[0],
        pointOneSquare[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointTwoSquare[0],
        pointTwoSquare[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointThreeSquare[0],
        pointThreeSquare[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointFourSquare[0],
        pointFourSquare[1],
        dotSize,
        dotSize
      );

      shapePoints.push(pointOneSquare);
      shapePoints.push(pointTwoSquare);
      shapePoints.push(pointThreeSquare);
      shapePoints.push(pointFourSquare);
    }

    if (shape === 'pentagon') {
      // context.fillRect(30, 30, dotSize, dotSize);

      context.fillRect(
        pointOnePent[0],
        pointOnePent[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointTwoPent[0],
        pointTwoPent[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointThreePent[0],
        pointThreePent[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointFourPent[0],
        pointFourPent[1],
        dotSize,
        dotSize
      );
      context.fillRect(
        pointFivePent[0],
        pointFivePent[1],
        dotSize,
        dotSize
      );

      shapePoints.push(pointOnePent);
      shapePoints.push(pointTwoPent);
      shapePoints.push(pointThreePent);
      shapePoints.push(pointFourPent);
      shapePoints.push(pointFivePent);
    }
    // context.fillRect(pointFour[0], pointFour[1], dotSize, dotSize);

    //select random shape point
    // const shapePoints = [pointOne, pointTwo, pointThree];
    const selectRandomPoint = (arr) => {
      let randomPoint = arr[Math.floor(Math.random() * arr.length)];
      return randomPoint;
    };

    // console.log('divider in useEffect: ', parseInt(divider));

    const midwayPoint = (a, b) => {
      // return (a + b) / 3;
      return (a + b) / parseFloat(divider);
    };

    const determineNewCurrentPoint = (currentPoint, randomPoint) => {
      return [
        midwayPoint(currentPoint[0], randomPoint[0]),
        midwayPoint(currentPoint[1], randomPoint[1]),
      ];
    };

    // for (let i = 0; i < 50; i++) {
    //   console.log('inside for loop');
    //   let randomPoint = selectRandomPoint(shapePoints);
    //   setCurrentPoint(determineNewCurrentPoint(currentPoint, randomPoint));
    //   context.fillRect(currentPoint[0], currentPoint[1], dotSize, dotSize);
    //   setCounter(counter + 1);
    // }

    if (counter < repetitions) {

      if (counter === 0) {
        setCurrentPoint(startPoint);
        context.fillRect(currentPoint[0], currentPoint[1], dotSize, dotSize);
        console.log('inside if counter === 0 and currentPoint is: ', currentPoint);
      }
      console.log('counter ', counter);
      console.log('currentPoint ', currentPoint);
      let randomPoint = selectRandomPoint(shapePoints);
      setCurrentPoint(determineNewCurrentPoint(currentPoint, randomPoint));
      //
      // context.fillRect(pointOne[0], pointOne[1], dotSize, dotSize);
      // context.fillRect(pointTwo[0], pointTwo[1], dotSize, dotSize);
      // context.fillRect(pointThree[0], pointThree[1], dotSize, dotSize);
      context.fillRect(currentPoint[0], currentPoint[1], dotSize, dotSize);
      setCounter(counter + 1);
    }
  }, [divider, counter, repetitions, startPoint, dotSize, shape, currentPoint, setCounter]);



  return (
    <div className="">
      <canvas
        width="510"
        height="510"
        className="my-canvas"
        ref={canvasRef}
      />
    </div>
  );
};

export default Canvas;
