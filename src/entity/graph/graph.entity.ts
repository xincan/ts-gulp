/**
 *  图形公共实体类
 * @author JiangXincan
 * @date 2020/5/19 13:50
 */
import {Coordinate} from "../coordinate/coordinate.entity";

export class Graph {

    private _id: string;

    private _lineWidth: number = 1;

    private _strokeStyle: string = "gray";

    private _center: Coordinate;    // 中心点

    constructor(id: string, center: Coordinate) {
        this._id = id;
        this._center = center;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get lineWidth(): number {
        return this._lineWidth;
    }

    set lineWidth(value: number) {
        this._lineWidth = value;
    }

    get strokeStyle(): string {
        return this._strokeStyle;
    }

    set strokeStyle(value: string) {
        this._strokeStyle = value;
    }

    get center(): Coordinate {
        return this._center;
    }

    set center(value: Coordinate) {
        this._center = value;
    }

}
