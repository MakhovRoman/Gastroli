// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	modules: ['@nuxt/image', '@nuxt/eslint', '@nuxt/fonts'],
	fonts: {
		provider: 'bunny',
		families: [
			{ name: 'Open Sauce', style: 'sans-serif' },
			{ name: 'League Gothic' },
			{ name: 'Evolve Sans' },
		],
		defaults: {
			styles: ['normal'],
			weights: ['400', '500', '600']
		}
	}
})
