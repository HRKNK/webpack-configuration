import type { ModuleOptions } from "webpack";
import type { optionsBuild } from "./types/webpack.build.types";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from 'react-refresh-typescript';

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
		{ // IMAGE // https://webpack.js.org/guides/asset-management/#loading-images
			test: /\.(png|jpg|jpeg|gif)$/i,
			type: 'asset/resource',
		},

		{ // CSS
			test: /\.s?[ac]ss$/i, // /\.css$/i,
			// use: ["style-loader", "css-loader", "sass-loader"], // create css AS js-string (style-loader)
			use: [isDevelopment ? "style-loader": MiniCssExtractPlugin.loader, css_loader, "sass-loader"], // create only css files (MiniCssExtractPlugin.loader)
		},	

		{ // TS (опциональный вариант)
			test: /\.tsx?$/,
			exclude: /node_modules/,
			use: [{
				loader: 'ts-loader',
				options: {
					transpileOnly: isDevelopment, // опция игнорирования типов при сборке [boolean]
					getCustomTransformers: () => ({ // для HotModuleReplacement
						before: [isDevelopment && ReactRefreshTypeScript()].filter(Boolean),
					}),
				}
			}],
		},

		// { // Babel
		// 	test: /\.tsx?$/,
		// 	exclude: /node_modules/,
		// 	use: {
		// 		loader: "babel-loader",
		// 	}
		// },

		{ // SVG-loader
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: [{
				loader: '@svgr/webpack',
				options: { // Конфиг лоадера: https://react-svgr.com/docs/options
					icon: true, // Resize SVG - удаляет из SVG размеры
					svgoConfig: { // Recolor SVG - удаляет из SVG fill
						plugins: [{
							name: 'convertColors',
							params: { currentColor: true },
						}],
					},
				},
			}],
		},
	]
}