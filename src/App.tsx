import { useState } from 'react';
import './App.css';
import EyeTracker from './EyeTracker';
import RotateObject3D from './RotateObject3D';
import Calibration from './Calibration';

const App = () => {
  const [showCalibration, setShowCalibration] = useState(true);

  const handleFinishCalibration = () => {
    setShowCalibration(false);
  };

  return (
    <>
      <EyeTracker />
      {showCalibration && <Calibration onFinishCalibration={handleFinishCalibration} />}
      <header><h2>Product-Eye</h2></header>
      <aside className='asideLeft'>
        <h2>Products</h2>
        <div className='product'></div>
        <div className='product'></div>
        <div className='product'></div>
      </aside>
      <main id="stageSection">
        {showCalibration && <RotateObject3D />}
      </main>
    </>
  );
};

export default App;