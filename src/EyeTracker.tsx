import { useEffect } from 'react';
import { Coordinates } from './Coordinates';

const EyeTracker = () => {
    useEffect(() => {
        webgazer.showVideoPreview(true)
        webgazer
        .setRegression('ridge')
        .saveDataAcrossSessions(true)
        .showFaceOverlay(false)
        .showFaceFeedbackBox(true)
        .showPredictionPoints(true)
        .applyKalmanFilter(true)

        webgazer.setGazeListener((data, elapsedTime) => {
            if (data == null) return;
            Coordinates.setCurrentCoordinates(data.x, data.y);
        }).begin();
        
        
        /*
        // NEW CODE
        webgazer.setRegression('ridge')
        //.setTracker('clmtrackr')
        .setGazeListener(function(data, clock) {
            if (data == null) return;
                Coordinates.setCurrentCoordinates(data.x, data.y);
        })
        .saveDataAcrossSessions(true)
        .showFaceOverlay(false)
        .showFaceFeedbackBox(true)
        .showPredictionPoints(true)
        .showVideoPreview(true)
        .applyKalmanFilter(true)
        .begin();
        */

    }, []); // Empty dependency array to run once on mount

    return null;
};

export default EyeTracker;