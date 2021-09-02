<template>
  <div>
    <header>header</header>
    <aside>aside</aside>
    <main>main</main>
    <article>article</article>
    <footer>footer</footer>
    <el-button @click="toLogin">click me</el-button>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const toLogin = (): void => {
    router.push('/login');
  };
</script>

<style lang="scss" scoped></style>
