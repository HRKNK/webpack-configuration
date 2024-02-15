import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

interface ENV {
	mode: 'development' | 'production',
	port: number,
};

export default (env: ENV) => {
	// Логи окружения
	console.log('Режим сборки:', env.mode, '\n');

	// Исключение
	const isDevelopment = env.mode === 'development';

	const config: webpack.Configuration = {
		mode: env.mode ?? 'development', // режим сборки
		entry: { // точка входа. объект-перечисление нескольких точек
			bundle: path.resolve(__dirname, 'src', 'index.tsx'), // где ключ - имя бандла на выходе (при отсутствии output конфигурации)
		},

		// конфигурация дэв-сервера (isDevelopment)
		devServer: isDevelopment ? {
			port: env.port ?? 3000,
			open: true, // открыть браузер
		} : undefined,

		// source-map (isDevelopment)
		devtool: isDevelopment ? 'inline-source-map' : undefined,

		output: { // куда собрать
			filename: '[name].[contenthash].js', 
			// имя бандла // [name] включает entry-ключ как имя бандла // [contenthash] включает хэш-файла в название файла
			path: path.resolve(__dirname, 'build'), // путь хранения бандла
			clean: true, // при сборке очищает папку хранения бандла
		},
		plugins: [ // массив плагинов
			new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), // шаблон index.html
			new webpack.ProgressPlugin(), // процентный прогресс сборки (консоль)
		].filter(Boolean),

		// Лоадеры // Последовательно обрабатываются с конца массива
		module: {
			rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			],
		},
		resolve: { // форматы/расширения файлов // учитывается порядок
			extensions: ['.tsx', '.ts', '.js'],
		},

	}

	return config;
};