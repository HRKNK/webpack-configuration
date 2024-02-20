import path from 'path';
import webpack from 'webpack';
import { webpackBuild } from './config/build/webpack.build';
import type { pathsBuild } from './config/build/types/webpack.build.types';

// Типы окружения (package.json)
interface ENV {
	mode: 'development' | 'production';
	port: number;

	env?: string;
}

export default (env: ENV) => {
	// Логи окружения
	console.log('Режим сборки:', env.mode, '\n');

	// Пути точек входа/публики/выхода/алиас(@)
	const paths: pathsBuild = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		public: path.resolve(__dirname, 'public'),
		output: path.resolve(__dirname, 'build'),
		src: path.resolve(__dirname, 'src'),
	};

	// Основной webpack конфиг(декомпозирован)
	const config: webpack.Configuration = webpackBuild({
		mode: env.mode ?? 'development',
		port: env.port ?? 3000,
		paths,

		// Проброс переменных окружения в src(приложение)
		env: env.env ?? 'null',
	});

	return config;
};
