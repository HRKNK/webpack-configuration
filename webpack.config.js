const path = require('path');

module.exports = {
	mode: 'production', // режим сборки
	entry: { // точка входа. объект-перечисление нескольких точек
		bundle: path.resolve(__dirname, 'src', 'index.js'), // где ключ - имя бандла на выходе (при отсутствии output конфигурации)
	},
	output: { // куда собрать
		filename: '[name].[contenthash].js', 
		// имя бандла // [name] включает entry-ключ как имя бандла // [contenthash] включает хэш-файла в название файла
		path: path.resolve(__dirname, 'build'), // путь хранения бандла
		clean: true, // при сборке очищает папку хранения бандла
	},
};