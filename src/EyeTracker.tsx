import './App.css'
import { useEffect } from 'react';

const EyeTracker = () => {
  let xprediction : number;
  let yprediction : number;

  useEffect(() => {
    webgazer.setGazeListener(function(data, elapsedTime) {
        if (data == null) {
            return;
        }
        xprediction = data.x; //these x coordinates are relative to the viewport
        yprediction = data.y; //these y coordinates are relative to the viewport
        console.log(elapsedTime); //elapsed time is based on time since begin was called
    }).begin();
  })

  return null
}

export default EyeTracker;