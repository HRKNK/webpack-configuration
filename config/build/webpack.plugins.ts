import path from 'path';
import webpack, { DefinePlugin, type Configuration } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { optionsBuild } from './types/webpack.build.types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function webpackPlugins(options:optionsBuild): Configuration['plugins'] {
	// Исключение
	const isDevelopment = options.mode === 'development';
	const isProduction = options.mode === 'production';

	return [ // массив плагинов
		// new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }), // шаблон index.html
		new HtmlWebpackPlugin({ template: options.paths.html }),
		new DefinePlugin({ // Дополнительные переменные из окружения
			__ENV: JSON.stringify(options.env),
		}),
		
		isDevelopment && new ForkTsCheckerWebpackPlugin(), // процесс проверки типов (при игнорировании лоадером!)
		isDevelopment && new webpack.ProgressPlugin(), // процентный прогресс сборки (консоль)

		isProduction && new MiniCssExtractPlugin({ // отделение CSS от инъекции в JS-стринг.
			filename: 'css/[name].[contenthash:15].css', 
			chunkFilename: 'css/[name].[contenthash:15].css', 
		}),
		isProduction && new BundleAnalyzerPlugin(), // бандл анализатор
	].filter(Boolean)
}