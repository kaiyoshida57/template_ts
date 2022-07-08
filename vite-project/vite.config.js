import { defineConfig} from 'vite'
import viteImagemin from 'vite-plugin-imagemin'; // 追加

export default defineConfig({
	base: './', // 相対パスを指定する。デプロイ先がルートでない場合にも対応
	server: {
		port: 3000
	},
	plugins: [
		// legacy({
		// 	targets: ['ie >= 11'],
		// 	additionalLegacyPolyfills: ['regenerator-runtime/runtime']
		// }),
		// 圧縮
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
			},
			optipng: {
				optimizationLevel: 7,
			},
			mozjpeg: {
				quality: 20,
			},
			pngquant: {
				quality: [0.8, 0.9],
				speed: 4,
			},
			svgo: {
				plugins: [{
						name: 'removeViewBox',
					},
					{
						name: 'removeEmptyAttrs',
						active: false,
					},
				],
			},
		}),
	],
})
