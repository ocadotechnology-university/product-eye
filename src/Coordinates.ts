import { EyeCoordinates } from "src/model/eye-coordinates.ts";

export class Coordinates {
    static x: number;
    static y: number;
    static isSet: boolean = false;

    static setCurrentCoordinates({ x, y }: EyeCoordinates) {
        Coordinates.x = x;
        Coordinates.y = y;
        Coordinates.isSet = true;
    }
}