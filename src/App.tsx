import { SetStateAction, useCallback, useState } from 'react';
import EyeTracker from 'src/EyeTracker';
import RotateObject3D from 'src/RotateObject3D';
import Calibration from 'src/components/calibration/calibration';
import { SideBar } from 'src/components/side-bar';
import productsFileNamesMapping from 'src/data/textures/products-file-names-mapping';
import 'src/App.css';

const App = () => {
  const [showCalibration, setShowCalibration] = useState(true);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFinishCalibration = useCallback(() => {
    setShowCalibration(false);
  }, []);

  const handleProductSelect = useCallback((fileName: SetStateAction<string>) => {
    setSelectedFileName(fileName);
  }, []);

  return (
    <>
      <EyeTracker />
      {showCalibration && <Calibration onFinishCalibration={handleFinishCalibration} />}
      {!showCalibration && <RotateObject3D selectedFileName={selectedFileName} />}
      {!showCalibration && <SideBar products={productsFileNamesMapping} onProductSelect={handleProductSelect} />}
    </>
  );
};

export default App;

