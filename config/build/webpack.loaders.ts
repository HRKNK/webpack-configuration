import { type ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type { optionsBuild } from "./types/webpack.build.types";

export function webpackLoaders(options:optionsBuild): ModuleOptions['rules'] {
	// Исключение
	const isDevelopment = options.mode === 'development';

    // Лоадеры // Последовательно обрабатываются с конца массива
    return [
        { // CSS
            test: /\.s?[ac]ss$/i, // /\.css$/i,
            // use: ["style-loader", "css-loader", "sass-loader"], // create css AS js-string
            use: [isDevelopment ? "style-loader": MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // create only css files
        },	
        { // TS
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
}