import { describe, expect, it } from 'vitest';
import CoordinatesHandler from 'src/CoordinatesHandler';


describe('Screen coordinates to cartesian coordinates', () => {
  it('screenToCartesianCoordinates converts correctly', () => {
    const width = 800;
    const height = 600;
    const coordinatesHandler = new CoordinatesHandler(width, height);
    const { x, y } = coordinatesHandler.screenToCartesianCoordinates(100, 200);
    expect(x).toBe(-300);
    expect(y).toBe(100);
  });
});
