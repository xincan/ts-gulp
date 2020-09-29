import {Draw} from "./factory/draw.factory";
import {Panel} from "./entity/panel/panel.entity";
import {PanelService} from "./interface/panel.interface";
import {PanelServiceImpl} from "./service/panel.service";
import {RectangleGraph} from "./entity/graph/rectangle.graph.entity";
import {Graph} from "./entity/graph/graph.entity";
import {
    CircleGraphDrawServiceImpl,
    DiamondGraphDrawServiceImpl,
    OvalGraphDrawServiceImpl,
    RectangleGraphDrawServiceImpl
} from "./service/draw.service";
import {Coordinate} from "./entity/coordinate/coordinate.entity";
import {CircleGraph} from "./entity/graph/circle.graph.entity";
import {OvalGraph} from "./entity/graph/oval.graph.entity";
import {DiamondGraph} from "./entity/graph/diamond.graph.entity";

let image = (id: string) => {
    // 绘制画布
    let panel = new Panel(id, 1366, 768, "#38c6ec", "px");
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
    let rectangleDraw = new Draw(ctx, rectangleGraph, new RectangleGraphDrawServiceImpl());
    rectangleDraw.draw();

    // 构建绘图对象（圆形）
    let circleDraw = new Draw(ctx, circleGraph, new CircleGraphDrawServiceImpl());
    circleDraw.draw();

    // 构建绘图对象（椭圆）
    let ovalDraw = new Draw(ctx, ovalGraph, new OvalGraphDrawServiceImpl());
    ovalDraw.draw();

    // 构建绘图对象（菱形）
    let diamondDraw = new Draw(ctx, diamondGraph, new DiamondGraphDrawServiceImpl());
    diamondDraw.draw();

};

image("canvas");