<script setup lang="ts">

</script>

<template>
    <div class="page">
        <NavMenu />

        <main class="main">
            <Greeting />
            <Team />
            <MobileBar />
            <Facts />
            <HowToCalculate />
            <Contacts />
            <Survive />
        </main>
    </div>
</template>

<style lang="scss">
.page {
    width: 100%;
    height: 100%;
    display: flex;

}
.main {
    width: calc(100% - 250px);
    margin-left: auto;
    display: flex;
	flex-direction: column;
}
</style>
