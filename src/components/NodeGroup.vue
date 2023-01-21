<template>
    <q-drawer show-if-above :width="200" :breakpoint="700" elevated content-class="bg-primary text-white">
        <q-scroll-area class="fit">
            <div class="q-pa-sm">
                <div class="node-item" @click="addChild">+</div>
            </div>
        </q-scroll-area>
    </q-drawer>
</template>

<script setup lang="ts">
import CanvasCore from 'src/editor/CanvasCore';
import { useCounterStore } from 'src/stores/canvas-main';
const store = useCounterStore();


const addChild = () => {
    console.log('添加子元素');
    // CanvasCore.getIns().execute(['create', 'rect']);
    // CanvasCore.getIns().addChild(createRectGraphics(), CanvasCore.getIns().app.stage);
}

</script>

<style lang="scss">
.node-item {
    cursor: pointer;
    background: #f0f0f0;
}
</style>