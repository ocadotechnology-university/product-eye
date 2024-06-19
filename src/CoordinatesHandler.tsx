const calculateLog = (x: number, base: number) => {
  return Math.log(Math.abs(x) + 1) / Math.log(base) * Math.sign(x);
}

class CoordinatesHandler {
  halfScreenWidth: number;
  halfScreenHeight: number;
  minHalfDimension: number;

  constructor(screenWidth: number, screenHeight: number) {
    this.halfScreenWidth = screenWidth / 2;
    this.halfScreenHeight = screenHeight / 2;
    this.minHalfDimension = Math.min(this.halfScreenWidth, this.halfScreenHeight);
  };


  cartesianToLogarithmicSpeedCoordinates = (cartesianX: number, cartesianY: number,
    logBase: number, rotationSpeedFactor: number) => {

    const xPercent = 100 * cartesianX / this.minHalfDimension;
    const yPercent = 100 * cartesianY / this.minHalfDimension;

    return {
      xSpeed: calculateLog(yPercent, logBase) * rotationSpeedFactor,
      ySpeed: calculateLog(xPercent, logBase) * rotationSpeedFactor
    };
  }

  screenToCartesianCoordinates = (screenX: number, screenY: number) => {
    const cartesianX = screenX - this.halfScreenWidth;
    const cartesianY = this.halfScreenHeight - screenY;

    return {
      x: cartesianX,
      y: cartesianY
    };
  };
}

export default CoordinatesHandler;
