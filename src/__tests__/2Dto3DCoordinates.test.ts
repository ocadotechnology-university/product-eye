import { describe, expect, it } from 'vitest';
import  CooordinateTransformer from 'src/CoordinatesHandler';


describe('Rotation Calculator', () => {
    it.each([
        [30, 45, 0.2, { xSpeed: 0.1378, ySpeed: 0.1414, zSpeed: 0.0612 }],
        [60, 30, 0.2, { xSpeed: 0.1005, ySpeed: 0.1, zSpeed: 0.1732 }],
        [90, 0, 0.2, { xSpeed: 0, ySpeed: 0, zSpeed: 0.2 }],
    ])('twoDimensionalToThreeDimensional calculates speeds correctly', (x, y, rotationSpeedFactor, expected) => {
        const speeds = CooordinateTransformer.twoDimensionalToThreeDimensional(x, y, rotationSpeedFactor);
        expect(speeds.xSpeed).toBeCloseTo(expected.xSpeed, 1);
        expect(speeds.ySpeed).toBeCloseTo(expected.ySpeed, 1);
        expect(speeds.zSpeed).toBeCloseTo(expected.zSpeed, 1);
    });
});