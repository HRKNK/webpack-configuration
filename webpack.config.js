const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {

	// Логи окружения
	console.log('Режим сборки:', env.mode, '\n'); 

	return {
		mode: env.mode ?? 'development', // режим сборки
		entry: { // точка входа. объект-перечисление нескольких точек
			bundle: path.resolve(__dirname, 'src', 'index.js'), // где ключ - имя бандла на выходе (при отсутствии output конфигурации)
		},
		output: { // куда собрать
			filename: '[name].[contenthash].js', 
			// имя бандла // [name] включает entry-ключ как имя бандла // [contenthash] включает хэш-файла в название файла
			path: path.resolve(__dirname, 'build'), // путь хранения бандла
			clean: true, // при сборке очищает папку хранения бандла
		},
		plugins: [ // массив плагинов
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), // шаблон index.html
			new webpack.ProgressPlugin(), // процентный прогресс сборки (консоль)
		],
	}
};