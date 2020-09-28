import {Draw} from "../entity/draw/draw.entity";
import {DrawService} from "../interface/draw.interface";
import {RectangleGraph} from "../entity/graph/rectangle.graph.entity";
import {CircleGraph} from "../entity/graph/circle.graph.entity";
import {DiamondGraph} from "../entity/graph/diamond.graph.entity";
 /**
   *  绘制矩形
   * @author JiangXincan
   * @date 2020/9/28 18:23
   */
class RectangleGraphDrawServiceImpl implements DrawService {
    draw(draw: Draw): Draw {
        let  ctx = draw.panel;
        let graph = <RectangleGraph> draw.graph;
        let center = graph.center;
        ctx.beginPath();
        ctx.lineWidth = graph.lineWidth;
        ctx.strokeStyle = "red";
        ctx.strokeRect(center.x, center.y, graph.width, graph.height);
        ctx.stroke();
        return draw;
    }
}

/**
 *  绘制圆形
 * @author JiangXincan
 * @date 2020/9/28 18:23
 */
class CircleGraphDrawServiceImpl implements DrawService {
    draw(draw: Draw): Draw {
        let  ctx = draw.panel;
        let graph = <CircleGraph> draw.graph;
        let center = graph.center;
        ctx.beginPath();
        ctx.strokeStyle = "lime";
        ctx.arc(center.x, center.y, graph.r, 0, Math.PI * 2, true);
        ctx.stroke();
        return draw;
    }
}

/**
 *  绘制椭圆形
 * @author JiangXincan
 * @date 2020/9/28 18:23
 */
class OvalGraphDrawServiceImpl implements DrawService {
    draw(draw: Draw): Draw {
        let  ctx = draw.panel;
        let graph = <CircleGraph> draw.graph;
        let center = graph.center;
        ctx.beginPath();
        ctx.strokeStyle = "lime";
        ctx.ellipse(center.x, center.y, 30, 10, 0, 0, Math.PI * 2);
        ctx.stroke();
        return draw;
    }
}

class DiamondGraphDrawServiceImpl implements DrawService {
    draw(draw: Draw): Draw {
        let  ctx = draw.panel;
        let graph = <DiamondGraph> draw.graph;
        let center = graph.center;
        ctx.beginPath();
        ctx.rotate(Math.PI / 180 * 45);
        ctx.strokeStyle = "blue";
        ctx.strokeRect(center.x + graph.width, center.x, graph.width, graph.height);
        ctx.stroke();
        return draw;
    }
}

export {
    RectangleGraphDrawServiceImpl,
    CircleGraphDrawServiceImpl,
    OvalGraphDrawServiceImpl,
    DiamondGraphDrawServiceImpl
};
