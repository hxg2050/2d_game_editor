<template>
  <q-layout view="hHh lpr lFf">
    <q-header elevated>
      <e-header></e-header>
    </q-header>
    <node-group></node-group>
    <q-page-container>
      <q-page padding>
        <canvas-body ref="canvasBody"></canvas-body>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import EHeader from 'src/components/EHeader.vue';
import NodeGroup from 'src/components/NodeGroup.vue';
import CanvasBody from 'src/components/CanvasBody.vue';
import { onMounted, ref } from 'vue';

import CanvasCore from '../editor/CanvasCore'

const canvasBody = ref(CanvasBody);
onMounted(() => {
  // console.log(canvasBody.value);
  // canvasBody.value.testFunc();
});
// CanvasCore.getIns().create();
// 当前选中的节点
// selectNode = null;
// let newNode = canvasMain.createSprite();
// // 将新创建的node加入到选中的节点
// selectNode.addChild(newNode);

// // 要移动到的位置
// index = 1;
// // 移动
// addChildAt(newNode, index)
</script>
