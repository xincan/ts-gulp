 /**
   *  中心点对象，图形所处在画布上的坐标中心点
   * @author JiangXincan
   * @date 2020/9/28 17:38
   * @return
   */
export class Coordinate {

    private _x: number;     // 横坐标值

    private _y: number;     // 纵坐标值

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
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
}