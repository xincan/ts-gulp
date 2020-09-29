/**
 *  矩形实体对象
 * @author JiangXincan
 * @date 2020/5/19 13:38
 */
import {Coordinate} from "../coordinate/coordinate.entity";
import {Graph} from "./graph.entity";
import {CoordinateUtils} from "../../utils/coordinate.utils";

export class RectangleGraph extends Graph {

    constructor(id: string, center: Coordinate) {
        super(id, center);
    }

}
