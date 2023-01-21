import { Application, Transform } from 'hxg';
import { canvas2d } from 'hxg/src/core';
import { useCounterStore } from 'src/stores/canvas-main';

/**
 * 中心画布操作类
 */
class CanvasCore {
  private static Ins: CanvasCore;

  app!: Application;

  private constructor() {
    // return;
  }

  static getIns() {
    if (!CanvasCore.Ins) {
      CanvasCore.Ins = new CanvasCore();
    }
    return CanvasCore.Ins;
  }

  /**
   * 初始化
   */
  init(app: Application) {
    this.app = app;
    return;
  }

  /**
   * 重置
   */
  reset() {
    this.app.stage.removeChildren();
  }

  /**
   * 加载配置
   */
  load() {
    return;
  }

  /**
   * 创建一个节点
   */
  create(type = 'sprite') {
    if (type == 'sprite') {
      const node = new Sprite();
      node.addListener('click', this.select, this);
      return node;
    }
  }

  selectedNode?: DisplayObject;

  /**
   * 选中元素
   */
  select(evt: InteractionEvent) {
    this.selectedNode = evt.target;
    console.log(evt.target);
    const store = useCounterStore();
    store.active.push(evt.target);
  }

  /**
   * 设置选中效果
   */
  setActive() {
    this.selectedNode?.x;
  }

  /**
   * 插入节点
   */
  addChild(node: Transform, parent: Transform) {
    console.log(node, parent);
    parent.addChild(node);
  }

  /**
   * 插入节点到指定位置
   */
  addChildAt(node: DisplayObject, parent: Container, index: number) {
    parent.addChildAt(node, index);
  }

  execute() {
    console.log('execute');
  }
}

export default CanvasCore;
