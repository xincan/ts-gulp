import {Graph} from "../entity/graph/graph.entity";
import {DrawService} from "../interface/draw.interface";

/**
 *  图形绘制策略类
 * @author JiangXincan
 * @date 2020/9/29 13:56
 */
export class Draw {

    // 当前画布
    private _panel: CanvasRenderingContext2D;

    // 将要绘制的图形对象
    private _graph: Graph;

    // 图形绘制
    private _drawService: DrawService;

    constructor(panel: CanvasRenderingContext2D, graph: Graph, drawService: DrawService) {
        this._panel = panel;
        this._graph = graph;
        this._drawService = drawService;
    }

    /**
     *  绘图处理
     * @author JiangXincan
     * @date 2020/9/29 14:14
     * @return
     */
    public draw(): Draw {
        this._drawService.draw(this._panel, this._graph);
        return this;
    }

    get panel(): CanvasRenderingContext2D {
        return this._panel;
    }

    set panel(value: CanvasRenderingContext2D) {
        this._panel = value;
    }

    get graph(): Graph {
        return this._graph;
    }

    set graph(value: Graph) {
        this._graph = value;
    }

    get drawService(): DrawService {
        return this._drawService;
    }

    set drawService(value: DrawService) {
        this._drawService = value;
    }
}