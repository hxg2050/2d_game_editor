<template>
    <div class="cover-rect" :style="{width: width + 'px', height: height + 'px'}">

        <div :style="{height: height + 'px'}" class="line line-left"></div>
        <div :style="{width: width + 'px'}" class="line line-top"></div>
        <div :style="{height: height + 'px', left: width + 'px'}" class="line line-right"></div>
        <div :style="{width: width + 'px', top: height + 'px'}" class="line line-bottom"></div>

        <div class="size">
            <div class="dot t-dot"></div>
            <div class="dot tr-dot"></div>
            <div class="dot r-dot"></div>
            <div class="dot rb-dot"></div>
            <div class="dot b-dot"></div>
            <div class="dot bl-dot"></div>
            <div class="dot l-dot"></div>
            <div class="dot lt-dot"></div>
        </div>
        <div class="move">
            <div class="center-rect"></div>
            <div class="vertical-line line line-top">
                <div class="arrow"></div>
            </div>
            <div class="horizontal-line line line-right">
                <div class="arrow"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const width = ref(100);
const height = ref(100);

// const do: DisplayObject;

</script>

<style lang="scss">
.cover-rect {
    position: absolute;
    margin-left: 100px;
    margin-top: 100px;
}

.line {
    position: absolute;
    background: #0000ff;

    &.line-top,
    &.line-bottom {
        height: 1px;
    }

    &.line-left,
    &.line-right {
        width: 1px;
    }
}

$dot-size: 5px;
$center-dot-size: $dot-size / 2;

.dot {
    position: absolute;
    width: $dot-size;
    height: $dot-size;
    background: #0000ff;
    border-radius: 100%;
    cursor: pointer;

    &.t-dot {
        top: -$center-dot-size;
        left: calc(50% - #{$center-dot-size});
    }

    &.tr-dot {
        top: -$center-dot-size;
        right: -$center-dot-size;
    }

    &.r-dot {
        top: calc(50% - #{$center-dot-size});
        right: -$center-dot-size;
    }

    &.rb-dot {
        bottom: -$center-dot-size;
        right: -$center-dot-size;
    }

    &.b-dot {
        bottom: -$center-dot-size;
        left: calc(50% - #{$center-dot-size});
    }

    &.bl-dot {
        bottom: -$center-dot-size;
        left: -$center-dot-size;
    }

    &.l-dot {
        top: calc(50% - #{$center-dot-size});
        left: -$center-dot-size;
    }

    &.lt-dot {
        top: -$center-dot-size;
        left: -$center-dot-size;
    }
}

.size {
    // display: none;
}

.move {
    // display: none;
    margin-top: 50%;
    margin-left: 50%;
}

.vertical-line {
    width: 80px;

    .arrow {
        margin-top: -7px;
        margin-left: 80px;
        transform: rotate(90deg);
    }
}

.horizontal-line {
    height: 80px;

    .arrow {
        margin-left: -7px;
        margin-top: 80px;
        transform: rotate(180deg);
    }
}

.arrow {
    position: absolute;
    width: 14px;
    height: 14px;
    // background-image: url(/icons/arrow.svg);
    background-color: #0000ff;
    mask-image: url(/icons/arrow.svg);
    mask-size: 100% 100%;
}

.center-rect {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ff0000;
    // border: 1px solid #8b8200;
}
</style>