import { describe, expect, it } from 'vitest';
import CoordinatesHandler from 'src/CoordinatesHandler';

const calculateLog = (x: number, base: number) => {
  return Math.log(Math.abs(x) + 1) / Math.log(base) * Math.sign(x);
}

describe('Cartesian coordinates to logarithmic speed coordinates', () => {
  it('cartesianToLogarithmicSpeedCoordinates converts correctly', () => {
    const width = 800;
    const height = 600;
    const coordinatesHandler = new CoordinatesHandler(width, height);

    const logBase = 2;
    const rotationSpeedFactor = 1.5;
    const xCartesian = 100;
    const yCartesian = 200;

    const { xSpeed, ySpeed } = coordinatesHandler.cartesianToLogarithmicSpeedCoordinates(100, 200, logBase, rotationSpeedFactor);

    const xPercent = 100 * xCartesian / coordinatesHandler.minHalfDimension;
    const yPercent = 100 * yCartesian / coordinatesHandler.minHalfDimension;

    const expectedXSpeed = calculateLog(yPercent, logBase) * rotationSpeedFactor;
    const expectedYSpeed = calculateLog(xPercent, logBase) * rotationSpeedFactor;

    expect(xSpeed).toBeCloseTo(expectedXSpeed, 5);
    expect(ySpeed).toBeCloseTo(expectedYSpeed, 5);
  });
});