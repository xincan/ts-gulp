import {Draw} from "./entity/draw/draw.entity";
import {DrawService} from "./interface/draw.interface";
import {Panel} from "./entity/panel/panel.entity";
import {PanelService} from "./interface/panel.interface";
import {PanelServiceImpl} from "./service/panel.service";
import {RectangleGraph} from "./entity/graph/rectangle.graph.entity";
import {Graph} from "./entity/graph/graph.entity";
import {
    RectangleGraphDrawServiceImpl,
    CircleGraphDrawServiceImpl,
    OvalGraphDrawServiceImpl,
    DiamondGraphDrawServiceImpl
} from "./service/draw.service";
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


let image = (id: string) => {
    // 绘制画布
    let panel = new Panel(id, 1300, 600, "#38c6ec", "px");
    let panelServiceImpl: PanelService = new PanelServiceImpl();
    let ctx =  panelServiceImpl.create(panel);

    // 构造矩形对象（有宽高）
    let rectangleGraph: Graph = new RectangleGraph("rectangle", new Coordinate(5, 5, 50, 20));
    // 构造原型对象（有半径）
    let circleGraph: Graph = new CircleGraph("circleGraph", new Coordinate(50, 50), 30);
    // 构造椭圆对象
    let ovalGraph: Graph = new OvalGraph("ovalGraph", new Coordinate(150, 50, 30, 10));
    // 构造菱形对象
    let diamondGraph: Graph = new DiamondGraph("diamondGraph", new Coordinate(40, 10, 30, 30));

    // 构建绘图对象（矩形）
    let rectangleDraw = new Draw(ctx, rectangleGraph);
    let rectangleGraphDrawServiceImpl: DrawService = new RectangleGraphDrawServiceImpl();
    rectangleGraphDrawServiceImpl.draw(rectangleDraw);

    // 构建绘图对象（圆形）
    let circleDraw = new Draw(ctx, circleGraph);
    let circleGraphDrawServiceImpl: DrawService = new CircleGraphDrawServiceImpl();
    circleGraphDrawServiceImpl.draw(circleDraw);

    // 构建绘图对象（椭圆）
    let ovalDraw = new Draw(ctx, ovalGraph);
    let ovalGraphDrawServiceImpl: DrawService = new OvalGraphDrawServiceImpl();
    ovalGraphDrawServiceImpl.draw(ovalDraw);

    // 构建绘图对象（菱形）
    let diamondDraw = new Draw(ctx, diamondGraph);
    let diamondGraphDrawServiceImpl: DrawService = new DiamondGraphDrawServiceImpl();
    diamondGraphDrawServiceImpl.draw(diamondDraw);

};

image("canvas");