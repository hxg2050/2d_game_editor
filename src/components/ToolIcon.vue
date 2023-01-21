<template>
    <!-- <div class="icon" src="/icons/tool-move.svg"> -->
    <!-- <img src="/icons/tool-move.svg" alt=""> -->
    <!-- </div> -->
    <q-btn size="sm" color="primary" icon="img:icons/tool-move.svg" />
</template>
<script setup lang="ts">
import { ref } from 'vue';

const iconPath = ref('');
</script>

<style lang="scss">
.icon {
    width: 30px;
    height: 30px;
    // background-image: url(attr(src));
}
</style>