import { useState } from 'react';
import EyeTracker from './EyeTracker';
import RotateObject3D from './RotateObject3D';
import Calibration from './Calibration';
import SideBar from './SideBar';
import products from './products';

import './App.css';

const productNames = products.map((product) => product.productName);
const productFileNames = products.map((product) => product.fileName);

const App = () => {
  const [showCalibration, setShowCalibration] = useState(true);

  const handleFinishCalibration = () => {
    setShowCalibration(false);
  };


  return (
    <>
      <EyeTracker />
      {showCalibration && <Calibration onFinishCalibration={handleFinishCalibration} />}
      {!showCalibration && <RotateObject3D />}
      {!showCalibration && <SideBar products={productNames} />}
    </>
  );
};

export default App;

