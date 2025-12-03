<template>
	<section class="mobile-bar">
		<div class="mobile-bar__wrapper">
			<h2>ВЫЕЗДНОЙ БАР</h2>
			<p>
				Организуем выездной бар под ключ с вниманием к
				деталям и вашим пожеланиям.
			</p>
			<p>
				Мы привезём барную станцию, бокалы, лёд, посуду и
				всё необходимое оборудование.
			</p>
			<p>
				Команда барменов настроит работу, подберёт меню
				и создаст нужное настроение.
			</p>
		</div>
	</section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.mobile-bar {
	width: 100%;
	aspect-ratio: 4269/2400;
	background-image: url('/img/6.webp');
	background-size: 100%;

	&__wrapper {
		padding: 64px 96px;

		h2, p {
			color: white;
			font-family: 'Open Sauce', sans-serif;
		}

		h2 {
			margin-bottom: 100px;
		}

		p {
			font-size: 20px;
			width: 500px;
		}

		p + p {
			margin-top: 20px;
		}
	}
}
</style>
