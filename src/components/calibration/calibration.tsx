import { useEffect, useState } from 'react';
import 'src/App.css'

type Props = {
  onFinishCalibration: () => void;
}

const NUMBER_OF_DOTS = 5;
const MAX_CLICKS = 10;
const MAX_TOTAL_CLICKS = MAX_CLICKS * NUMBER_OF_DOTS;

const Calibration = ({ onFinishCalibration }: Props) => {
  const [clickCount, setClickCount] = useState([0, 0, 0, 0, 0]);
  const [totalClicks, setTotalClicks] = useState(0);

  const handleClick = (index: number) => {
    if (clickCount[index] < MAX_CLICKS) {
      setClickCount(prevState => ({ ...prevState, [index]: prevState[index] + 1 }));
      setTotalClicks(totalClicks + 1);
    }
  };

  useEffect(() => {
    if (totalClicks >= MAX_TOTAL_CLICKS) {
      onFinishCalibration();
    }
  }, [onFinishCalibration, totalClicks]);

  const getDotColor = (index: number) => {
    if (clickCount[index] >= MAX_CLICKS) {
      return 'linear-gradient(135deg, #008aff, #86d472)';
    } else {
      return 'red';
    }
  };

  return (
    <section id='calibration' style={{ display: getDisplay(totalClicks) }}>
      <div className="calibrationDot"
        style={{
          background: getDotColor(0)
        }}
        onClick={() => handleClick(0)}
      ></div>
      <div className="calibrationDot"
        style={{
          background: getDotColor(1)
        }}
        onClick={() => handleClick(1)}
      ></div>
      <div className="calibrationDot"
        style={{
          background: getDotColor(2)
        }}
        onClick={() => handleClick(2)}
      ></div>
      <div className="calibrationDot"
        style={{
          background: getDotColor(3)
        }}
        onClick={() => handleClick(3)}
      ></div>
      <div className="calibrationDot"
        style={{
          background: getDotColor(4)
        }}
        onClick={() => handleClick(4)}
      ></div>
    </section>
  );
};

export default Calibration;

const getDisplay = (currentTotalClick: number) => {
  if (currentTotalClick >= MAX_TOTAL_CLICKS) {
    return 'none';
  } else {
    return 'absolute';
  }
};
