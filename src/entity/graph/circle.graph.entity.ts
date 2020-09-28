/**
 *  圆形实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
import {Graph} from "./graph.entity";
import {Coordinate} from "../coordinate/coordinate.entity";

export class CircleGraph extends Graph{

    // 半径
    private _r: number = 30;

    constructor(id: string, center: Coordinate, r: number) {
        super(id, center);
        this._r = r;
    }

    get r(): number {
        return this._r;
    }

    set r(value: number) {
        this._r = value;
    }
}