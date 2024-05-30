import { useState } from 'react';
import EyeTracker from './EyeTracker';
import RotateObject3D from './RotateObject3D';
import Calibration from './Calibration';

import './App.css';
import { Aside, Button, Header, Product, ProductSpan} from './styles';

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

      <Aside>
        <Header>
          <h1>Product-Eye</h1>
        </Header>

        <section>
          <h2>Products</h2>
          <Product>
            <ProductSpan></ProductSpan>
          </Product>
          <Product>
            <ProductSpan></ProductSpan>
          </Product>
          <Product>
            <ProductSpan></ProductSpan>
          </Product>
        </section>

        <footer style={{marginTop: "auto"}}>
          <Button>About us</Button>
        </footer>
      </Aside>
    </>
  );
};

export default App;