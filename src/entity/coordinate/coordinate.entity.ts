/**
 *  中心点对象，图形所处在画布上的坐标中心点
 * @author JiangXincan
 * @date 2020/9/28 17:38
 * @return
 */
export class Coordinate {

    // 图形横坐标
    private _x: number;

    // 图形纵坐标
    private _y: number;

    // 图形宽
    private _width: number;

    // 图形高
    private _height: number;

    constructor(x: number, y: number, width?: number, height?: number) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
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
}