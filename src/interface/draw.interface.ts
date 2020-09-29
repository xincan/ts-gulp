import {Draw} from "../factory/draw.factory";
import {Graph} from "../entity/graph/graph.entity";
export interface DrawService {

    draw(ctx: CanvasRenderingContext2D, graph: Graph): void;

}