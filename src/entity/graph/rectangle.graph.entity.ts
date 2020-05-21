/**
 *  矩形实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
import {Coordinate} from "../coordinate/coordinate.entity";
import {Graph} from "./graph.entity";
import {CoordinateUtils} from "../../utils/coordinate.utils";

export class RectangleGraph extends Graph {

    private _width: number;   // 矩形宽

    private _height: number;   // 矩形高

    private _coordinate: Coordinate;    // 图形绘制起止点

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

    get coordinate(): Coordinate {

        if(this._coordinate === null) {
            return CoordinateUtils.coordinate(this.center.x, this.center.y, this._width, this._height);
        }

        return this._coordinate;
    }

    set coordinate(value: Coordinate) {
        this._coordinate = value;
    }
}
