<template>
  <div class="backgroundImage">
    <canvas id="canvas" width="610" height="500"></canvas>
    <ElButton @click="test">11</ElButton>
  </div>
</template>

<script lang="ts" setup>
import { fabric } from 'fabric';
import { computed, onMounted, ref } from 'vue';

let textBoxLeft: any = ref();
let textBoxTop: any = ref();

const msg = computed(() => {
  return 'Message from HuoHuo';
});
const textLeft = computed(() => {
  return textBoxLeft;
});
const textRight = computed(() => {
  return textBoxTop;
});
const test = (): void => {
  console.log('--------', textLeft.value, textRight.value);
};
onMounted(() => {
  const CANVAS = document.getElementById('canvas');
  console.log(CANVAS.offsetLeft, CANVAS.offsetTop);

  const canvas = new fabric.Canvas('canvas', {
    backgroundColor: 'skyblue'
  });
  // const msg: string = 'Message from HuoHuo';
  const textbox = new fabric.Text(msg.value, {
    left: 100,
    top: 100,
    width: 150,
    fontSize: 20,
    fontWeight: 100,
    fill: 'red', // 字体颜色
    fontStyle: 'italic', // 斜体
    fontFamily: 'Comic Sans', // 设置字体
    stroke: 'pink', // 描边颜色
    strokeWidth: 3, // 描边宽度
    hasControls: false,
    borderColor: 'orange',
    textBackgroundColor: '', // 文本背景色
    shadow: 'rgba(0,0,0,0.3) 5px 5px 5px', // 阴影
    textAlign: 'center', // 文本对齐 left center right
    // editingBorderColor: 'blue' // 点击文字进入编辑状态时的边框颜色
  });
  textbox.on('selected', function (e) {
    textBoxLeft = e.target.left;
    textBoxTop = e.target.top;
    console.log('You are selevted!', e.target.left, e.target.top);
  });
  canvas.add(textbox);
  console.log(textbox);
});
</script>

<style lang="scss" scoped>
.backgroundImage {
  background-image: url('../assets/test.jpg');
  width: 610px;
  height: 500px;
}
</style>
