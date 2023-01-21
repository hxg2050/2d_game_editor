<template>
    <q-bar class="q-electron-drag">
        <div class="cursor-pointer non-selectable q-electron-drag--exception">
            文件
            <q-menu>
                <q-list dense style="min-width: 100px">
                    <q-item clickable v-close-popup>
                        <q-item-section>新建项目</q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup>
                        <q-item-section>打开项目</q-item-section>
                    </q-item>
                    <q-item clickable>
                        <q-item-section>设置</q-item-section>
                        <q-item-section side>
                            <q-icon name="keyboard_arrow_right" />
                        </q-item-section>
                        <q-menu auto-close anchor="top end" self="top start">
                            <q-list>
                                <q-item dense clickable>
                                    <q-item-section>项目设置</q-item-section>
                                </q-item>
                                <q-item dense clickable>
                                    <q-item-section>编辑器设置</q-item-section>
                                </q-item>
                            </q-list>
                        </q-menu>
                    </q-item>
                </q-list>

            </q-menu>
        </div>
        <q-space />

        <q-btn dense flat icon="minimize" @click="minimize" />
        <q-btn dense flat :icon="maxminicon" @click="toggleMaximize" />
        <q-btn dense flat icon="close" @click="closeApp" />
    </q-bar>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import WinStatusType from '../../src-electron/WinStatusTpye';


const maxminicon = ref('filter_none');//crop_square

// 最小化窗口
const minimize = () => {
    window.eapi.minimize();
}
const toggleMaximize = () => {
    const status = window.eapi.toggleMaximize();
    maxminicon.value = status == WinStatusType.MAX ? 'filter_none' : 'crop_square';
}

const closeApp = () => {
    window.eapi.close();
}
</script>
<style>
</style>