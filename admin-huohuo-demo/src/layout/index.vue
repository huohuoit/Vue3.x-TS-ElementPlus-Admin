<template>
  <div>
    <h1>Hello Canvas</h1>
    <canvas id="canvas" width="500" height="500"></canvas>
    <canvas id="canvas1" width="700" height="700">
      <img id="img" src="../assets/test.jpg" alt="" />
    </canvas>
    <h2>-----------------</h2>

    <!-- <h1>GoodBye Canvas</h1> -->
  </div>
</template>

<script lang="ts" setup>
  import { fabric } from 'fabric';
  import { onMounted } from 'vue';

  onMounted(() => {
    const canvas = new fabric.Canvas('canvas');
    const canvas1 = new fabric.Canvas('canvas1');
    // 矩形
    const rect = new fabric.Rect({
      left: 300, // 距离左边的距离
      top: 0, // 距离上边的距离
      fill: 'green', // 填充的颜色
      width: 100, // 矩形宽度
      height: 100 // 矩形高度
    });
    // 动画效果
    rect.animate('left', '+=100', {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000
    });
    // 圆形
    const circle = new fabric.Circle({
      left: 0,
      top: 0,
      fill: 'red',
      radius: 50
    });
    // 三角形
    const triangle = new fabric.Triangle({
      left: 150,
      top: 0,
      fill: 'blue',
      width: 100,
      height: 100
    });
    // 三角形动画
    triangle.set({ angle: 0 });
    triangle.animate('angle', '-=90', {
      onChange: canvas.renderAll.bind(canvas),
      duration: 2000
    });
    // 路径绘图
    const customPath = new fabric.Path(
      'M 0 0 L 300 100 L 170 100 L 70 300 L 20 200 C136.19,2.98,128.98,0,121.32,0 z'
    );
    customPath.set({
      left: 150,
      top: 150,
      fill: 'green'
    });
    canvas.add(rect, circle, triangle, customPath);

    // 绘制图片
    setTimeout(() => {
      // 绘制图片需要异步，先加载完图片再在图片上进行绘制
      // 方式一（通过img元素添加）
      const img1: any = document.getElementById('img'); // 声明图片
      const image = new fabric.Image(img1, {
        // 对图片进行设置
        left: 0,
        top: 0,
        opacity: 0.6,
        // 可以通过scaleX和scaleY来设置图片绘制后的大小，这里为原来大小的一半
        scaleX: 0.5,
        scaleY: 0.5
      });
      canvas1.add(image);
      // 向画布添加 Textbox 对象
      const msg: string = 'Message from HuoHuo';
      const textbox = new fabric.Textbox(msg, {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20, // 字体大小
        fontWeight: 100, // 字体粗细
        fill: 'red', // 字体颜色
        fontStyle: 'italic', // 斜体
        fontFamily: 'Delicious', // 设置字体
        stroke: 'green', // 描边颜色
        strokeWidth: 3, // 描边宽度
        hasControls: false,
        borderColor: 'orange',
        editingBorderColor: 'blue' // 点击文字进入编辑状态时的边框颜色
      });
      canvas1.add(textbox);
      // 方式二（通过图片路径添加）
      //   fabric.Image.fromURL('../assets/work.png', (img) => {
      //     img.scale(0.5);
      //     img.set({
      //       hasControls: false, // 是否开启图层的控件
      //       borderColor: 'orange' // 图层控件边框的颜色
      //     });
      //     canvas.add(img);
      //   });
    }, 1000);
  });
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  #canvas,
  #canvas1 {
    margin-left: 200px;
  }
</style>
