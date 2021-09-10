<template>
  <div class="test">
    <h1>Hello Canvas</h1>
    <canvas id="StaticCanvas" width="500" height="150"></canvas>
    <canvas id="canvas" width="500" height="350"></canvas>
    <canvas id="canvas1" width="500" height="500">
      <img id="img" src="../assets/test.jpg" alt="" />
    </canvas>
    <canvas id="canvas2" width="500" height="350"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { fabric } from 'fabric';
import { onMounted } from 'vue';

onMounted(() => {
  // 1 用原生canvas元素创建一个fabric实例
  const canvas = new fabric.Canvas('canvas');
  const canvas1 = new fabric.Canvas('canvas1');
  const canvas2 = new fabric.Canvas('canvas2');

  // 2 创建一个矩形对象
  const rect = new fabric.Rect({
    left: 250, // 距离左边的距离
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
  // 3 将矩形添加到canvas画布上
  canvas.add(rect);
  // 无互动层矩形（不能拖拽、旋转、放大等操作）
  const StaticCanvas = new fabric.StaticCanvas('StaticCanvas');
  const rectStatic = new fabric.Rect({
    left: 150,
    top: 0,
    fill: 'pink',
    width: 100,
    height: 100
  });
  StaticCanvas.add(rectStatic);
  // 圆形
  const circle = new fabric.Circle({
    left: 0,
    top: 0,
    fill: 'red',
    radius: 50
  });
  // 圆形渐变
//   circle.setGradient('fill', {
//     // 渐变开始的位置
//     x1: 0,
//     y1: 0,
//     // 渐变结束的位置
//     x2: circle.width,
//     y2: 0,
//     //渐变的颜色
//     colorStops: {
//       // 渐变的范围(0,0.1,0.3,0.5,0.75,1) 0-1之间都可以
//       0: 'red',
//       0.2: 'orange',
//       0.4: 'yellow',
//       0.6: 'green',
//       0.8: 'blue',
//       1: 'purple'
//     }
//   });
  // 三角形一
  const triangle1 = new fabric.Triangle({
    top: 0,
    fill: 'blue',
    width: 50,
    height: 50
  });
  // 三角形动画
  triangle1.set({ angle: 0 });
  triangle1.animate('angle', '-=90', {
    onChange: canvas.renderAll.bind(canvas),
    duration: 2000
  });
  //  三角形二
  const triangle2 = new fabric.Triangle({
    top: 100,
    fill: 'blue',
    width: 50,
    height: 50
  });
  // 组合 可通过 groupmitem(0) 和 groupmitem(1) 访问的组合对象
  const group = new fabric.Group([triangle1, triangle2], {
    left: 150
  });
  // 如果你想创建一个已经存在于画布上的对象的组合，则需要首先克隆它们
  // 创建一个包含两个已存在对象的副本的组合
  // var group = new fabric.Group([
  //   canvas.item(0).clone(),
  //   canvas.item(1).clone()
  // ]);

  // // 移除所有对象并且重新渲染
  // canvas.clear().renderAll();

  // // 将组合添加到canvas画布
  // canvas.add(group);

  // 路径绘图
  const customPath = new fabric.Path(
    'M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41\
    c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,\
    0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32\
    c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87\
    -2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,\
    12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4\
    -20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z'
  );
  customPath.set({
    left: 50,
    top: 180,
    fill: 'green'
  });
  canvas.add(circle, group, customPath);


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
      linethrough: true, // 文本修饰
      shadow: 'rgba(0,0,0,0.3) 5px 5px 5px', // 阴影 
      textAlign: 'center', // 文本对齐 left center right
      editingBorderColor: 'blue' // 点击文字进入编辑状态时的边框颜色
    });
    // StaticCanvas.add(textbox); // 静态
    canvas1.add(textbox);
    //   方式二（通过图片路径添加）
    // fabric.Image.fromURL('../assets/work.png', (img) => {
    //   img.scale(0.5);
    //   img.set({
    //     hasControls: false, // 是否开启图层的控件
    //     borderColor: 'orange' // 图层控件边框的颜色
    //   });
    //   canvas2.add(img);
    // });
  }, 1000);
});
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  color: white;
}
// #canvas,
// #canvas1 {
//   //   margin-left: 200px;
// }
.test {
    background-image: url('../assets/test.jpg');
}
</style>
