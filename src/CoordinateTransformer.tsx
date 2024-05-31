class CooordinateTransformer {
  static screenToCartesianCoordinates = (screenX: number, screenY: number, screenWidth: number, screenHeight: number) => {
    const cartesianX = screenX - screenWidth / 2;
    const cartesianY = screenHeight / 2 - screenY;
    return { x: cartesianX, y: cartesianY };
  };

  static twoDimensionalToThreeDimensional = (x: number, y: number, rotationSpeedFactor: number) => {
    const radianPhi = y * Math.PI / 180;
    const radianTheta = x * Math.PI / 180;

    const xEye = Math.cos(radianTheta) * Math.cos(radianPhi);
    const yEye = Math.sin(radianPhi);
    const zEye = Math.sin(radianTheta) * Math.cos(radianPhi);

    return {
      xSpeed: xEye * rotationSpeedFactor,
      ySpeed: yEye * rotationSpeedFactor,
      zSpeed: zEye * rotationSpeedFactor,
    };
  };
}

export default CooordinateTransformer;
