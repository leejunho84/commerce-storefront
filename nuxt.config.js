export default {
    mode:'ssr',
    srcDir: 'src/',
	head:{
		titleTemplate: '%s - Nuxt.js',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Meta description' }
		],
		link:[
			{ rel: 'icon', type: 'image/x-icon', href:'/favicon.ico'},
			{ rel: 'stylesheet', href: '/css/reset.css' }
		]
    },
    router:{
        fallback:true,
    },
    plugins:[],
	buildModules: ['@nuxt/typescript-build']
}