import React, { useEffect, useState } from 'react';
import './App.css';
import EyeTracker from './EyeTracker';
import RotateObject3D from './RotateObject3D';
import Calibration from './Calibration';
import { CalibrationMode } from './CalibrationMode';

const App = () => {
  const [showCalibration, setShowCalibration] = useState(true);

  const handleFinishCalibration = () => {
    setShowCalibration(false);
  };

  return (
    <div>
      <EyeTracker />
      {showCalibration && <Calibration onFinishCalibration={handleFinishCalibration} />}
      {!showCalibration && <RotateObject3D />}
    </div>
  );
};

export default App;