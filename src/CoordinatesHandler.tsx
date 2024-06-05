class CoordinatesHandler {
  static cartesianToLogarithmicSpeedCoordinate = (cartesianCoordinate: number, coordinateScaleFactor: number, logBase: number,
    rotationSpeedFactor: number) => {
    
    return  Math.log(Math.abs(cartesianCoordinate) * coordinateScaleFactor + 1) // get log value of scaled coordinate 
    / Math.log(logBase) // get log_a(b)
    * Math.sign(cartesianCoordinate) * rotationSpeedFactor; // apply the sign and the rotation speed factor
  }

  static screenToCartesianCoordinates = (screenX: number, screenY: number, screenWidth: number, screenHeight: number) => {
    const cartesianX = screenX - screenWidth / 2;
    const cartesianY = screenHeight / 2 - screenY;
    return { x: cartesianX, y: cartesianY };
  };

  static twoDimensionalToThreeDimensional = (x: number, y: number) => {
    const radianPhi = y * Math.PI / 180;
    const radianTheta = x * Math.PI / 180;

    const xEye = Math.cos(radianTheta) * Math.cos(radianPhi);
    const yEye = Math.sin(radianPhi);
    const zEye = Math.sin(radianTheta) * Math.cos(radianPhi);

    return {
      xSpeed: xEye,
      ySpeed: yEye,
      zSpeed: zEye,
    };
  };
}

export default CoordinatesHandler;
