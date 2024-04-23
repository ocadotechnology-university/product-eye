export class Coordinates {
    static x: number;
    static y: number;
    static isSet: boolean = false;

    static setCurrentCoordinates(x: number, y: number) {
        Coordinates.x = x;
        Coordinates.y = y;
        Coordinates.isSet = true;
    }
}