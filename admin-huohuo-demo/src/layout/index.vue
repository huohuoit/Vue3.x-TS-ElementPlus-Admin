<template>
    <div>
        <header>header</header>
        <aside>aside</aside>
        <main>main</main>
        <article>article</article>
        <footer>footer</footer>
        <ElButton @click="toLogin">click me</ElButton>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();

const toLogin = (): void => {
    console.log('aaaaaaaaaaaas');

    router.push("/login");
}

</script>

<style lang="scss" scoped>

</style>