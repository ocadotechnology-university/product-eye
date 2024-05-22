import { useState } from 'react';
import './App.css'

interface EyeTrackerProps {
    onFinishCalibration: () => void;
  }

const Calibration: React.FC<EyeTrackerProps> = ({ onFinishCalibration }) => {
    const [clickCount, setClickCount] = useState([0, 0, 0, 0, 0]);
    const [totalClicks, setTotalClicks] = useState(0);
    const NUMBER_OF_DOTS = 5;
    const MAX_CLICKS = 12;
    const MAX_TOTAL_CLICKS = MAX_CLICKS * NUMBER_OF_DOTS;


    const handleClick = (index: number) => {
        if (clickCount[index] < MAX_CLICKS) {
            const newClickCount = [...clickCount];
            newClickCount[index]++;
            setClickCount(newClickCount);
            setTotalClicks(totalClicks + 1);
        }
    };

    const getDisplay = () => {
        if (totalClicks >= MAX_TOTAL_CLICKS) {
            onFinishCalibration();
            return 'none';
        }   
        else {
            return 'absolute';
        }
    };

    const getDotColor = (index: number) => {
        if (clickCount[index] >= MAX_CLICKS) {
            return 'green';
        } else {
            return 'red';
        }
    };


    return (
        <section id='calibration' style={{display: getDisplay()}}>
            <div className="calibrationDot"
                style={{
                    backgroundColor: getDotColor(0)
                }}
                onClick={() => handleClick(0)}
            ></div>
            <div className="calibrationDot"
                style={{
                    backgroundColor: getDotColor(1)
                }}
                onClick={() => handleClick(1)}
            ></div>
            <div className="calibrationDot"
                style={{
                    backgroundColor: getDotColor(2)
                }}
                onClick={() => handleClick(2)}
            ></div>
            <div className="calibrationDot"
                style={{
                    backgroundColor: getDotColor(3)
                }}
                onClick={() => handleClick(3)}
            ></div>
            <div className="calibrationDot"
                style={{
                    backgroundColor: getDotColor(4)
                }}
                onClick={() => handleClick(4)}
            ></div>
        </section>
    );
};

export default Calibration;