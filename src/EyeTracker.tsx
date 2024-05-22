import { useEffect } from 'react';
import { Coordinates } from './Coordinates';

const EyeTracker = () => {
    useEffect(() => {
        const initializeWebgazer = async () => {
            /*
            // OLD CODE
            await webgazer.setRegression('ridge');
            await webgazer.saveDataAcrossSessions(true);
            webgazer.showFaceOverlay(false);
            webgazer.showFaceFeedbackBox(false);
            webgazer.showVideo(false);

            webgazer.setGazeListener((data, elapsedTime) => {
                if (data == null) return;
                Coordinates.setCurrentCoordinates(data.x, data.y);
            }).begin();
            */

            await webgazer.setRegression('ridge') /* currently must set regression and tracker */
                //.setTracker('clmtrackr')
                .setGazeListener(function(data, clock) {
                    if (data == null) return;
                    Coordinates.setCurrentCoordinates(data.x, data.y);
                })
                .saveDataAcrossSessions(true)
                .showFaceOverlay(false)
                .showFaceFeedbackBox(false)
                .showPredictionPoints(true)
                .showVideoPreview(false)
                .applyKalmanFilter(true)
                .begin();
        };

        initializeWebgazer();
    }, []); // Empty dependency array to run once on mount

    return null;
};

export default EyeTracker;