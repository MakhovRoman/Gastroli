<script setup lang="ts">
onMounted(() => {
	const sectionList = document.querySelectorAll('.fade-in');

	const callback:IntersectionObserverCallback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				(entry.target as HTMLDivElement).classList.add('fade-in-visible');
				observer.unobserve(entry.target)
			}
		})
	};

	const observer = new IntersectionObserver(callback)
	sectionList.forEach((section) => observer.observe(section))
});
</script>

<template>
	<Body class="body">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</Body>
</template>

<style lang="scss">
@use './assets/main';

.body {
	width: 100%;
	height: 100%;

	display: flex;
	flex-direction: column;
}
</style>
