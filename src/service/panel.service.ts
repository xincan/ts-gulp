import {PanelService} from "../interface/panel.interface";
import {Panel} from "../entity/panel/panel.entity";

export class PanelServiceImpl implements PanelService {


    create(panel: Panel):  CanvasRenderingContext2D {
        let element = <HTMLCanvasElement> document.getElementById(panel.id);
        const context = element.getContext("2d");
        element.style.width =  `${panel.width}${panel.resolution}`;
        element.style.height = `${panel.height}${panel.resolution}`;
        element.style.backgroundColor = panel.backgroundColor;
        return context;
    }

}