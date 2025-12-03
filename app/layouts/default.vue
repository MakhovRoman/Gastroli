<script setup lang="ts">
import HowToCalculate from '~/components/HowToCalculate.vue';

</script>

<template>

    <main class="main">
        <Greeting />
        <Team />
        <MobileBar />
        <Facts />
        <HowToCalculate />
    </main>

    <footer>Footer</footer>

</template>

<style lang="scss">
.main {
    width: 100%;

    display: flex;
	flex-direction: column;
}
</style>
