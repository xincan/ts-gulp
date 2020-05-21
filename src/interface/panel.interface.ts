import {Panel} from "../entity/panel/panel.entity";

export interface PanelService {
    create(panel: Panel): CanvasRenderingContext2D;
}