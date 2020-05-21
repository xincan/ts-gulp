import {Draw} from "./entity/draw/draw.entity";
import {DrawService} from "./interface/draw.interface";
import {Panel} from "./entity/panel/panel.entity";
import {PanelService} from "./interface/panel.interface";
import {PanelServiceImpl} from "./service/panel.service";
import {RectangleGraph} from "./entity/graph/rectangle.graph.entity";
import {Graph} from "./entity/graph/graph.entity";
import {DrawServiceImpl} from "./service/draw.service";
import {Coordinate} from "./entity/coordinate/coordinate.entity";
import {CircleGraph} from "./entity/graph/circle.graph.entity";
import {OvalGraph} from "./entity/graph/oval.graph.entity";
import {DiamondGraph} from "./entity/graph/diamond.graph.entity";

/**
 *
 * @param drawService 绘图处理接口类
 * @param draw 绘图对象
 * @author JiangXincan
 * @date 2020/5/19 11:02
 * @return
 */
function draw(drawService: DrawService, draw: Draw) {
    return drawService.draw(draw);
}


let showHello = (id: string) => {

    // 绘制画布
    let panel = new Panel(id, 500, 500, "#38c6ec", "px");
    let panelServiceImpl: PanelService = new PanelServiceImpl();
    let ctx =  panelServiceImpl.create(panel);

    // 构造矩形对象
    let rectangleGraph: Graph = new RectangleGraph("rectangle", new Coordinate(50, 50) , 100,50);

    // 构造原型对象
    let circleGraph: Graph = new CircleGraph("circleGraph", new Coordinate(50, 50));

    // 构造原型对象
    let ovalGraph: Graph = new OvalGraph("ovalGraph", new Coordinate(50, 50));

    // 构造原型对象
    let diamondGraph: Graph = new DiamondGraph("diamondGraph", new Coordinate(50, 50));

    // 构建绘图对象
    let draw = new Draw(ctx, rectangleGraph);
    let drawServiceImpl = new DrawServiceImpl();
    let rect = drawServiceImpl.draw(draw);
    console.log(rect);


    let draw1 = new Draw(ctx, circleGraph);
    let drawServiceImpl1 = new DrawServiceImpl();
    let rect1 = drawServiceImpl.draw(draw);

};

showHello("canvas");