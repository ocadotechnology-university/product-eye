import { useEffect } from 'react';
import { Coordinates } from 'src/Coordinates';
import { EyeCoordinates } from "src/model/eye-coordinates.ts";

const EyeTracker = () => {
  useEffect(() => {
    webgazer
      .showVideoPreview(true)
      .setRegression('ridge')
      .saveDataAcrossSessions(true)
      .showFaceOverlay(false)
      .showFaceFeedbackBox(true)
      .showPredictionPoints(true)
      .applyKalmanFilter(true)

    webgazer.setGazeListener((data: EyeCoordinates) => {
      if (data != null) {
        Coordinates.setCurrentCoordinates(data);
      }
    }).begin();
  }, []); // Empty dependency array to run once on mount

  return null;
};

export default EyeTracker;