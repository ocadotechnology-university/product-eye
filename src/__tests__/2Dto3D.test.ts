import { describe, expect, it } from 'vitest';
import  CooordinateTransformer from '../CoordinateTransformer';


describe('Rotation Calculator', () => {
    it.each([
        [30, 45, 0.2, { xSpeed: 0.12247448713915893, ySpeed: 0.1414213562373095, zSpeed: 0.07071067811865475 }],
        [60, 30, 0.2, { xSpeed: 0.08660254037844389, ySpeed: 0.09999999999999999, zSpeed: 0.15000000000000002 }],
        [90, 0, 0.2, { xSpeed: 0, ySpeed: 0, zSpeed: 0.2 }],
    ])('twoDimensionalToThreeDimensional calculates speeds correctly', (x, y, rotationSpeedFactor, expected) => {
        const speeds = CooordinateTransformer.twoDimensionalToThreeDimensional(x, y, rotationSpeedFactor);
        expect(speeds.xSpeed).toBeCloseTo(expected.xSpeed, 1);
        expect(speeds.ySpeed).toBeCloseTo(expected.ySpeed, 1);
        expect(speeds.zSpeed).toBeCloseTo(expected.zSpeed, 1);
    });
});