import { useState } from 'react';
import './App.css'

interface EyeTrackerProps {
    onFinishCalibration: () => void;
  }

const NUMBER_OF_DOTS = 5;
const MAX_CLICKS = 12;
const MAX_TOTAL_CLICKS = MAX_CLICKS * NUMBER_OF_DOTS;

const Calibration: React.FC<EyeTrackerProps> = ({ onFinishCalibration }) => {
    const [clickCount, setClickCount] = useState([0, 0, 0, 0, 0]);
    const [totalClicks, setTotalClicks] = useState(0);
    

    const handleClick = (index: number) => {
        if (clickCount[index] < MAX_CLICKS) {
            const newClickCount = {...clickCount, [index]: clickCount[index]++}
            newClickCount[index]++;
            setClickCount(newClickCount);
            setTotalClicks(totalClicks + 1);
        }
    };

    const getVisibility = () => {
        if (totalClicks >= MAX_TOTAL_CLICKS) {
            onFinishCalibration();
            return 'hidden';
        }   
        else {
            return 'visible';
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
        <>
            <div
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: getDotColor(0),
                    borderRadius: '50%',
                    visibility: getVisibility(),
                }}
                onClick={() => handleClick(0)}
            ></div>
            <div
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: getDotColor(1),
                    borderRadius: '50%',
                    visibility: getVisibility(),
                }}
                onClick={() => handleClick(1)}
            ></div>
            <div
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    bottom: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: getDotColor(2),
                    borderRadius: '50%',
                    visibility: getVisibility(),
                }}
                onClick={() => handleClick(2)}
            ></div>
            <div
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '50%',
                    left: '100px',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: getDotColor(3),
                    borderRadius: '50%',
                    visibility: getVisibility(),
                }}
                onClick={() => handleClick(3)}
            ></div>
            <div
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: '50%',
                    right: '100px',
                    transform: 'translateY(-50%)',
                    width: '20px',
                    height: '20px',
                    backgroundColor: getDotColor(4),
                    borderRadius: '50%',
                    visibility: getVisibility(),
                }}
                onClick={() => handleClick(4)}
            ></div>
        </>
    );
};

export default Calibration;