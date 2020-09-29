import {Panel} from "../panel/panel.entity";
import {Graph} from "../graph/graph.entity";

export class Draw {

    // 当前画布
    private _panel: CanvasRenderingContext2D;

    // 将要绘制的图形对象
    private _graph: Graph;

    constructor(panel: CanvasRenderingContext2D, graph: Graph) {
        this._panel = panel;
        this._graph = graph;
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
}