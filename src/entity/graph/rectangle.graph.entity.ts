/**
 *  矩形实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
import {Coordinate} from "../coordinate/coordinate.entity";
import {Graph} from "./graph.entity";
import {CoordinateUtils} from "../../utils/coordinate.utils";

export class RectangleGraph extends Graph {

    // 矩形宽
    private _width: number;

    // 矩形高
    private _height: number;

    constructor(id: string, center: Coordinate, width: number, height: number) {
        super(id, center);
        this._width = width;
        this._height = height;
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
