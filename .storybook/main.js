const path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.[tj]s'],
	addons: [
		'@storybook/preset-typescript',
		'@storybook/addon-docs',
		'@storybook/addon-actions',
		'@storybook/addon-links'
	],
	webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.ts$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ts-loader',
				options: {
					appendTsSuffixTo: [/\.vue$/],
					transpileOnly: true
				},
			}],
		});

		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		return config;
	}
};