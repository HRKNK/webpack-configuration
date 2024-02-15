import path from 'path';
import webpack from 'webpack';
import { webpackBuild } from './config/build/webpack.build';
import type { pathsBuild } from './config/build/types/webpack.build.types';

// Типы окружения
interface ENV {
	mode: 'development' | 'production',
	port: number,
};

export default (env: ENV) => {
	// Логи окружения
	console.log('Режим сборки:', env.mode, '\n');

	// Пути точек входа/выхода
	const paths: pathsBuild = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		output: path.resolve(__dirname, 'build'),
	};

	const config: webpack.Configuration = webpackBuild({
		mode: env.mode ?? 'development',
		port: env.port ?? 3000,
		paths,
	});	
	return config;
};