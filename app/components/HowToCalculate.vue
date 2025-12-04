<template>
	<section class="calculate">
		<div class="calculate__wrapper fade-in">
			<h2>КАК СЧИТАЕМ</h2>
			<div>
				<p>
					Мы рассчитываем бюджет под каждое мероприятие
					индивидуально.
					<br>
					В базу входят:
				</p>
				<ul>
					<li>выезд и установка полностью укомплектованного бара</li>
					<li>подборка авторских коктейлей</li>
					<li>5-часовая смена барменов</li>
				</ul>
			</div>
			<p>
				Финальную смету подготовим после обсуждения формата и
				деталей события.
			</p>
		</div>
	</section>
</template>

<script lang="ts" setup>

</script>

<style lang='scss' scoped>
.calculate {
	aspect-ratio: 4269/2400;
	background-color: black;

	&__wrapper {
		padding: 64px 96px;
	}

	h2 {
		margin-bottom: 100px;
	}

	p {
		text-align: justify;
		width: 600px;
	}

	ul {
		padding-left: 8px;
		margin-bottom: 32px;
	}

	li {
		list-style-type:none;
		padding-left: 8px;
	}

	li::marker {
		content: "-";
		color: white;
	}
}
</style>
