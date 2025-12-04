<template>
	<section class="facts">
		<div class="facts__wrapper fade-in">
			<div class="facts__content">
				<h2>НАСТОЯЩИЙ ВКУС ОПЫТА</h2>
				<p>
					За 10 лет мы организовали сотни мероприятий — от
					камерных ужинов до фестивалей на 3000+ гостей.
					<br>
					Мы довели вкус коктейлей до тонкости, в которой слышно
					опыт, внимание и уважение к ремеслу.
				</p>
			</div>
			<div class="facts__content">
				<h2>ГЛАВНЫЙ ФАКТ О НАС</h2>
				<p>
					Наши бартендеры умеют слушать и понимать без слов.
					Мы любим людей и умеем создавать вечера, в которых всё
					по-настоящему просто, живо и с душой.
				</p>
				<p>
					Каждый, кто приходит к нам, не клиент, а друг.
					Из таких встреч и рождается то, ради чего мы работаем
					атмосфера, в которой хочется остаться подольше.
				</p>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.facts {
	background-image: url('/img/8_1.webp');
	aspect-ratio: 4269/2400;
	background-size: cover;

	&__wrapper {
		padding-top: 56px;
		padding-inline: 52px;
	}

	&__content {
		width: 550px;
		color: white;

		h2 {
			width: 100%;
			margin-bottom: 30px;
		}

		p {
			width: 100%;
		}

		p + p {
			margin-top: 20px;
		}

		& + & {
			margin-top: 150px;
		}
	}
}
</style>
