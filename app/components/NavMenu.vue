<template>
	<aside class="aside">
		<h2>COCKTAIL CATERING</h2>
		<h1>GASTROLI</h1>

		<nav>
			<ul>
				<li><NuxtLink to="/">КЕЙСЫ</NuxtLink></li>
				<li><NuxtLink to="/">УСЛУГИ</NuxtLink></li>
				<li><NuxtLink to="/">КОНТАКТЫ</NuxtLink></li>
			</ul>
		</nav>
	</aside>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.aside {
	background-color: black;
	position: fixed;
	height: 100vh;
	width: 220px;
	max-height: calc(100vh - env(safe-area-inset-bottom) - env(safe-area-inset-top));
	padding: 24px;
	border-right: 1px solid white;
}

ul {
	list-style-type: none;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	font-size: 18px;
}

h1 {
	font-family: 'League Gothic';
	font-size: 80px;
	line-height: 60px;
	font-weight: 400;
}

h2{
	font-size: 14px;
	line-height: 14px;
	font-weight: 500;
}

a {
	text-decoration: none;
	color: white;
}
</style>
