export class CalibrationMode {
    static calibrationMode: boolean = true;

    static setCalibrationMode(calibrationMode: boolean) {
        CalibrationMode.calibrationMode = calibrationMode;
    }
}