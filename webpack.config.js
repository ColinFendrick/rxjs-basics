var path = require('path');

module.exports = {
	entry: {
		app: './index.js',
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dev'),
		filename: '[name].bundle.js'
	},
	mode: 'development',
	module: {
		rules: [{
			test: /\.(js)$/,
			include: path.resolve(__dirname, 'src'),
			loader: 'babel-loader',
			options: {
				presets: [
					'@babel/preset-env'
				],
				plugins: [
					[
						'@babel/plugin-transform-runtime',
						{
							'regenerator': true
						}
					]
				]
			}
		}]
	}
};
