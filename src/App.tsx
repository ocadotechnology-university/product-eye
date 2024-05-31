import { SetStateAction, useState } from 'react';
import EyeTracker from './EyeTracker';
import RotateObject3D from './RotateObject3D';
import Calibration from './Calibration';
import SideBar from './SideBar';
import products from './products';
import './App.css';

const App = () => {
  const [showCalibration, setShowCalibration] = useState(true);
  const [selectedFileName , setSelectedFileName] = useState('');

  const handleFinishCalibration = () => {
    setShowCalibration(false);
  };

  const handleProductSelect = (fileName: SetStateAction<string>) => { 
    setSelectedFileName(fileName);
  };

  return (
    <>
      <EyeTracker />
      {showCalibration && <Calibration onFinishCalibration={handleFinishCalibration} />}
      {!showCalibration && <RotateObject3D selectedFileName={selectedFileName} />}
      {!showCalibration && <SideBar products={products} onProductSelect={handleProductSelect} />}
    </>
  );
};

export default App;

