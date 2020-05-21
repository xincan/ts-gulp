import {Coordinate} from "../entity/coordinate/coordinate.entity";

export class CoordinateUtils {

     /**
      *  //TODO
      * @author JiangXincan
      * @date 2020/5/19 14:22
      * @return object
      * @param x 图形起始点x坐标
      * @param y 图形起始点y坐标
      * @param width 图形宽度（px）
      * @param height 图形高度（px）
      */
    public static coordinate(x: number, y: number, width: number, height: number): Coordinate {
        // width: 200   height: 150 center [250, 100]
        return new Coordinate(x - width / 2, y - height / 2);
    }
}