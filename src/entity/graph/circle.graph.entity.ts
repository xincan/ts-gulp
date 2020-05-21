/**
 *  圆形实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
import {Graph} from "./graph.entity";
import {Coordinate} from "../coordinate/coordinate.entity";

export class CircleGraph extends Graph{


    constructor(id: string, center: Coordinate) {
        super(id, center);
    }
}