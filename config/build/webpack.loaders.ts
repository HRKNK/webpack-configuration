import { type ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { optionsBuild } from "./types/webpack.build.types";

export function webpackLoaders(options:optionsBuild): ModuleOptions['rules'] {
	// Исключение
	const isDevelopment = options.mode === 'development';

	// Конфигурация css-loader-a // https://webpack.js.org/loaders/css-loader/#object-2
	const css_loader = {
		loader: "css-loader",
		options: {
			modules: { // css-modules
				auto: /\.module\.s?[ac]ss$/i, // для каких файлов действует правило module (включая поддержку style.css)
				localIdentName: isDevelopment ? '[path][name]__[local]--[hash:base64:6]' : '[name]__[hash:base64:6]', // генерация имени стилей
			},
		},
	};

	// Лоадеры // Последовательно обрабатываются с конца массива
	return [
		{ // CSS
			test: /\.s?[ac]ss$/i, // /\.css$/i,
			// use: ["style-loader", "css-loader", "sass-loader"], // create css AS js-string (style-loader)
			use: [isDevelopment ? "style-loader": MiniCssExtractPlugin.loader, css_loader, "sass-loader"], // create only css files (MiniCssExtractPlugin.loader)
		},	
		{ // TS
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
	]
}