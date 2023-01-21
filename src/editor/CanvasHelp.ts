import { DisplayObject } from 'pixi.js';
import CanvasCore from './CanvasCore';

// class RectRange
// {
//     start() {
//         // 4条线
//         // 8个点
//         const line1 = new Graphics();
//         line1.lineStyle(1, 0xffffff);
//         line1.lineTo(10, 0);
//         line1.endFill();
//         return line1;
//     }

//     update() {

//     }

//     destory() {

//     }
// }

/**
 * 中心画布辅助类
 */
class CanvasHelp {
  private static Ins: CanvasHelp;

  app!: Element;

  private constructor() {
    // return;
  }

  static getIns() {
    if (!CanvasHelp.Ins) {
      CanvasHelp.Ins = new CanvasHelp();
    }
    return CanvasHelp.Ins;
  }

  /**
   * 初始化
   */
  init(app: Element) {
    this.app = app;
    return;
  }

  /**
   * 重置
   */
  reset() {
    this.app.innerHTML = '';
  }

  rangeRect!: DisplayObject;

  /**
   * 显示选中
   */
  showRange() {
    const selectedNode = CanvasCore.getIns().selectedNode;
    if (!selectedNode) {
      this.hideRange();
      return;
    }

    const x = selectedNode.x;
    const y = selectedNode.y;
  }

  /**
   * 隐藏选中
   */
  hideRange() {
    this.rangeRect.visible = false;
  }
}

export default CanvasHelp;
