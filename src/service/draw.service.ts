import {DrawService} from "../interface/draw.interface";
import {CircleGraph} from "../entity/graph/circle.graph.entity";
import {Graph} from "../entity/graph/graph.entity";

/**
   *  绘制矩形
   * @author JiangXincan
   * @date 2020/9/28 18:23
   */
class RectangleGraphDrawServiceImpl implements DrawService {
    draw(ctx: CanvasRenderingContext2D, graph: Graph): void {
        let center = graph.center;
        ctx.beginPath();
        ctx.lineWidth = graph.lineWidth;
        ctx.strokeStyle = "red";
        ctx.strokeRect(center.x, center.y, center.width, center.height);
        ctx.stroke();
    }
}

/**
 *  绘制圆形
 * @author JiangXincan
 * @date 2020/9/28 18:23
 */
class CircleGraphDrawServiceImpl implements DrawService {
    draw(ctx: CanvasRenderingContext2D, graph: Graph): void {
        let center = graph.center;
        ctx.beginPath();
        ctx.strokeStyle = "lime";
        ctx.arc(center.x, center.y, (<CircleGraph>graph).r, 0, Math.PI * 2, true);
        ctx.stroke();
    }
}

/**
 *  绘制椭圆形
 * @author JiangXincan
 * @date 2020/9/28 18:23
 */
class OvalGraphDrawServiceImpl implements DrawService {
    draw(ctx: CanvasRenderingContext2D, graph: Graph): void {
        let center = graph.center;
        ctx.beginPath();
        ctx.strokeStyle = "orange";
        ctx.ellipse(center.x, center.y, 30, 10, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
}

/**
 *  绘制菱形
 * @author JiangXincan
 * @date 2020/9/28 18:23
 */
class DiamondGraphDrawServiceImpl implements DrawService {
    draw(ctx: CanvasRenderingContext2D, graph: Graph): void {
        let center = graph.center;
        ctx.beginPath();
        ctx.rotate(Math.PI / 180 * 45);
        ctx.strokeStyle = "blue";
        ctx.strokeRect(center.x + center.width, center.x, center.width, center.height);
        ctx.stroke();
    }
}

export {
    RectangleGraphDrawServiceImpl,
    CircleGraphDrawServiceImpl,
    OvalGraphDrawServiceImpl,
    DiamondGraphDrawServiceImpl
};
