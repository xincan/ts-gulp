export class Panel {

    private _id: string;

    private _width: number;

    private _height: number;

    private _backgroundColor: string;

    private _resolution: string;

    constructor(id: string, width: number = 100, height: number = 100, backgroundColor: string = "#fdfdfd", resolution = "%") {
        this._id = id;
        this._width = width;
        this._height = height;
        this._backgroundColor = backgroundColor;
        this._resolution = resolution;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get backgroundColor(): string {
        return this._backgroundColor;
    }

    set backgroundColor(value: string) {
        this._backgroundColor = value;
    }

    get resolution(): string {
        return this._resolution;
    }

    set resolution(value: string) {
        this._resolution = value;
    }
}