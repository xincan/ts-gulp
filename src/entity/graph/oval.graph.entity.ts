/**
 *  椭圆实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
import {Graph} from "./graph.entity";
import {Coordinate} from "../coordinate/coordinate.entity";

export class OvalGraph extends Graph{

    // 椭圆宽
    private _width: number;

    // 椭圆高
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