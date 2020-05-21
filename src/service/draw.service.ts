import {Draw} from "../entity/draw/draw.entity";
import {DrawService} from "../interface/draw.interface";
import {RectangleGraph} from "../entity/graph/rectangle.graph.entity";

export class DrawServiceImpl implements DrawService {
    draw(draw: Draw): Draw {

        let  ctx = draw.panel;
        let graph = <RectangleGraph> draw.graph;
        let coordinate = graph.coordinate;

        // 红色矩形
        ctx.beginPath();
        ctx.lineWidth = graph.lineWidth;
        ctx.strokeStyle = "black";
        ctx.strokeRect(coordinate.x, coordinate.y, graph.width, graph.height);
        ctx.stroke();

        return draw;
    }
}
