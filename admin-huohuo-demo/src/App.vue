<template>
  <!-- 样式初步初始化 -->
  <div style="width: 100%; height: 100%">
    <!-- 这里使用 suspense 组件优化异步渲染 -->
    <Suspense>
      <template #default>
        <router-view />
      </template>
      <template #fallback>
        <!-- <h1 v-loading.fullscreen.lock="true"></h1> -->
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>
