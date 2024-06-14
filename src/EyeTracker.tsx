import { useEffect } from 'react';
import { Coordinates } from './Coordinates';

const EyeTracker = () => {
    useEffect(() => {
        webgazer.showVideoPreview(true);
        webgazer
            .setRegression('ridge')
            .saveDataAcrossSessions(true)
            .showFaceOverlay(false) 
            .showFaceFeedbackBox(true)
            .showPredictionPoints(true)
            .applyKalmanFilter(true);

        const gazeListener = (data, elapsedTime) => {
            if (data == null) 
                return;
            Coordinates.setCurrentCoordinates(data.x, data.y);
        };

        webgazer.setGazeListener(gazeListener).begin();

        return () => {
            webgazer.removeGazeListener(gazeListener);
            webgazer.end();
        };
    }, []);

    return null;
};

export default EyeTracker;
