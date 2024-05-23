import { useState } from 'react';
import './App.css';
import EyeTracker from './EyeTracker';
import RotateObject3D from './RotateObject3D';
import Calibration from './Calibration';
import logo from './assets/logo.png'

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

      <aside className='asideLeft'>
        <header className='logoBar'>
          <img src={logo} className='logo-img' />
          <h1 className='logo'>Product-Eye</h1>
        </header>

        <section className='productsBar'>
          <h2>Products</h2>
          <div className='product'>
            <span className='productSpan'></span>
          </div>
          <div className='product'>
            <span className='productSpan'></span>
          </div>
          <div className='product'>
            <span className='productSpan'></span>
          </div>
        </section>

        <footer className='footer'>
          <button>About us</button>
        </footer>
      </aside>
    </>
  );
};

export default App;