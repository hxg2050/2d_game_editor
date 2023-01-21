<template>
    <div class="canvas-group">
        <canvas class="main" ref="mainCanvas"></canvas>
        <div class="help" ref="hlepCanvas">
            <cover-rect v-for="(node, index) of store.active" :key="index"></cover-rect>
        </div>

        <div class="quick-tools">
            <q-btn size="sm" color="primary" icon="img:icons/tool-move.svg" @click="toMove" />
            <q-btn size="sm" color="primary" icon="img:icons/tool-rect.svg" />
            <q-btn size="sm" color="primary" icon="img:icons/tool-scale.svg" />
        </div>
    </div>
</template>

<script lang="ts" setup>
// import { Application, canvas2d } from 'hxg';
import CanvasCore from 'src/editor/CanvasCore';
// import CanvasHelp from 'src/editor/CanvasHelp';
import CoverRect from './CoverRect.vue';
import { onMounted, ref } from 'vue';
import { useCounterStore } from 'src/stores/canvas-main';

import ToolIcon from './ToolIcon.vue';
import { count } from 'console';

const store = useCounterStore();

const mainCanvas = ref(HTMLCanvasElement.prototype);
const hlepCanvas = ref(HTMLCanvasElement.prototype);

onMounted(() => {
    // const app = new Application({
    //     // 画布尺寸
    //     width: 720,
    //     height: 1280
    // });
    // app.use(canvas2d(mainCanvas.value));
    // CanvasCore.getIns().init(app);
});

const toMove = () => {
    console.log('toMove');
}

</script>

<style lang="scss">
.canvas-group {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: hidden;
}

.help {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
}

.quick-tools {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: column;

    .q-btn {
        margin-bottom: 5px;
    }
}
</style>