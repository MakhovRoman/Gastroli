// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/fonts'],
	fonts: {
		provider: 'google',
		families: [
			{ name: 'League Gothic' },
		],
		defaults: {
			styles: ['normal'],
			weights: ['300', '400', '500', '600']
		}
	}
})
