import {PanelService} from "../interface/panel.interface";
import {Panel} from "../entity/panel/panel.entity";

 /**
   *  绘制面板实现类
   * @author JiangXincan
   * @date 2020/9/29 14:39
   */
export class PanelServiceImpl implements PanelService {

     /**
      *  创建画布，返回画布上下文实例
      * @author JiangXincan
      * @date 2020/9/28 18:23
      * @return CanvasRenderingContext2D
      */
    create(panel: Panel):  CanvasRenderingContext2D {
        let element = <HTMLCanvasElement> document.getElementById(panel.id);
        const context = element.getContext("2d");
        element.style.width =  `${panel.width}${panel.resolution}`;
        element.style.height = `${panel.height}${panel.resolution}`;
        element.style.backgroundColor = panel.backgroundColor;
        return context;
    }

}