<template>
    <div class="cursor-pointer non-selectable q-electron-drag--exception">
        {{ props.title }}
        <q-menu>
            <q-list dense style="min-width: 100px">
                <slot></slot>
            </q-list>
        </q-menu>
    </div>
</template>

<script lang="ts" setup>
/**
 * 菜单，用于顶部菜单展示
 */
const props = defineProps({
    title: String
});
</script>