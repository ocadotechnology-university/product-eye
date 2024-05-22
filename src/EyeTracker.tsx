import { useEffect } from 'react';
import { Coordinates } from './Coordinates';

const EyeTracker = () => {
    useEffect(() => {
        webgazer.setRegression('ridge');
        webgazer.saveDataAcrossSessions(true);
        webgazer.showFaceOverlay(false);
        webgazer.showFaceFeedbackBox(false);
        webgazer.showVideo(false);

        webgazer.setGazeListener(function(data, elapsedTime) {
            if (data == null) return;
            
            Coordinates.setCurrentCoordinates(data.x, data.y);
        }).begin();

    })
    return null;
};

export default EyeTracker;