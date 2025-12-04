<template>
	<section class="contacts">
		<div class="contacts__wrapper fade-in">
			<h2>
				ВСТРЕТИМСЯ У БАРА
			</h2>
			<address class="contacts__content">
				<div class="contacts__phone">
					<a href="+99800000000" type="tel">+ 998 00000000</a>
					<a href="+99800000000" type="tel">+ 998 00000000</a>
				</div>
				<div class="contacts__street">
					<p>ТАШКЕНТ</p>
					<p>ШАХРИСАБЗ 33 А</p>
				</div>
			</address>
		</div>
	</section>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.contacts {
	aspect-ratio: 4269/2400;
	background-image: url('/img/11_1.webp');

	&__wrapper {
		padding: 64px 96px;
	}

	h2 {
		margin-bottom: 100px;
	}

	a {
		font-family: 'Open Sauce', sans-serif;
		font-size: 36px;
		font-weight: 400;
		text-decoration: none;
		color: white;
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: 32px;
		font-style: normal;

		p {
			font-size: 20px;
		}
	}

	&__phone {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	&__street {
		display: flex;
		flex-direction: column;
		gap: 8px;

		p {
			font-size: 28px !important;
			font-family: 'Open Sauce', sans-serif !important;
		}
	}
}
</style>
