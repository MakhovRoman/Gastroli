<template>
	<section class="survive">
		<div class="survive__wrapper fade-in">
			<h2>GASTROLI</h2>
			<div class="survive__img">
				<p class="survive__text">survive the work week</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.survive {
	aspect-ratio: 4269/2400;
	background-image: url('/img/11_1.webp');
	background-size: cover;

	&__wrapper {
		padding: 20px;
		position: relative;
	}

	&__text {
		position: absolute;
		right: 0;
		top: 70%;
		transform: translateX(100%);
		font-size: 28px;
		padding: 5px;
		background-color: black;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	&__img {
		width: 50%;
		height: 400px;
		background-color: red;
		position: absolute;
		top: calc(20px + 200px*0.35);
	}

	& h2 {
		font-family: 'League Gothic';
		font-size: 200px;
		font-weight: 500;
		text-align: right;
	}
}
</style>
