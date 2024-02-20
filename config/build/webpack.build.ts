import webpack from "webpack";
import path from 'path';
import { webpackDevServer } from "./webpack.devServer";
import { webpackLoaders } from "./webpack.loaders";
import { webpackPlugins } from "./webpack.plugins";
import { webpackResolvers } from "./webpack.resolvers";
import type { optionsBuild } from "./types/webpack.build.types";

export function webpackBuild(options:optionsBuild):webpack.Configuration {
    // Исключение
	const isDevelopment = options.mode === 'development';

    return {
        // режим сборки
		mode: options.mode ?? 'development', 
		// точка входа. объект-перечисление нескольких точек
		entry: {
			// bundle: path.resolve(__dirname, 'src', 'index.tsx'), // где ключ - имя бандла на выходе (при отсутствии output конфигурации)
			bundle: options.paths.entry,
		},
		// куда собрать
		output: { 
			filename: '[name].[contenthash:15].js', // имя бандла // [name] включает entry-ключ как имя бандла // [contenthash] включает хэш-файла в название файла
			chunkFilename: 'chunks/bundle.chunk.[contenthash:15].js',
			// path: path.resolve(__dirname, 'build'), // путь хранения бандла
			path: options.paths.output,
			clean: true, // при сборке очищает папку хранения бандла
		},
		// конфигурация дэв-сервера (isDevelopment)
		devServer: isDevelopment ? webpackDevServer(options) : undefined,
		// source-map (isDevelopment)
		devtool: isDevelopment ? 'inline-source-map' : 'source-map', // https://webpack.js.org/configuration/devtool/#devtool
        // массив плагинов
		plugins: webpackPlugins(options),
		// Лоадеры // Последовательно обрабатываются с конца массива
		module: {
			rules: webpackLoaders(options),
		},
        // форматы/расширения файлов // учитывается порядок
        resolve: webpackResolvers(options),
	}
}