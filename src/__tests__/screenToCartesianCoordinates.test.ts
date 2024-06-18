import { describe, expect, it } from 'vitest';
import  CooordinateTransformer from 'src/CoordinatesHandler';


describe('Screen coordinates to cartesian coordinates', () => {
     it('screenToCartesianCoordinates converts correctly', () => {
       const { x, y } = CooordinateTransformer.screenToCartesianCoordinates(100, 200, 800, 600);
       expect(x).toBe(-300);
       expect(y).toBe(100);
     });
   });
  