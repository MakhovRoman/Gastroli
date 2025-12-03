<template>
	<section class="team">
		<div class="team__wrapper">
			<div class="team__content">
				<div style="width: 350px; height: 450px; background-color: red; display: flex; flex-shrink: 0; align-self: center;"></div>
				<div>
					<h2>GASTROLI TEAM</h2>
					<p>
						Мы команда барменов, которая превращает любое
						событие в место со вкусом.
						<br>
						Без фейерверков и лишнего шума, просто правильный
						бар там, где его не было.
					</p>
					<p>
						В нашем арсенале всё, что нужно: лёд, стекло, рецепты и
						чувство меры.
					</p>
					<p>
						От классики до авторских коктейлей с ароматами трав,
						цитрусов и неожиданностей.
						<br>
						Вы оставляете заявку и мы уже в пути.
					</p>
					<p>
						Соберём бар, встряхнём шейкеры и подадим напитки,
						которые запомнятся надолго.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.team {
	width: 100%;
	background-image: url('/img/4.webp');
	background-size: 100%;
	aspect-ratio: 4269/2400;

	&__wrapper {
		height: calc(100% - 64px * 2);
		padding: 64px 96px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;

		& h2 {
			color: white;
			font-size: 56px;
			font-family: 'League Gothic';
			font-weight: 500;
			margin-bottom: 40px;
		}
	}

	&__content {
		height: 100%;
		display: flex;
		gap: 60px;

		& p {
			color: white;
			font-family: 'Open Sauce', sans-serif;
			font-size: 20px;
			word-spacing: 0.5rem;
			font-weight: 500;
		}

		& p + p {
			margin-top: 20px;
		}
	}
}
</style>
