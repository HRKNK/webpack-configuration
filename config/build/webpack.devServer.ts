import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { optionsBuild } from "./types/webpack.build.types";

export function webpackDevServer(options:optionsBuild): DevServerConfiguration {
    return {
		port: options.port ?? 3000,
		open: true, // открыть браузер
		historyApiFallback: true, // https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
		// При использовании API истории HTML5 вместо ответов 404, скорее всего, придется обслуживать страницу index.html.

		hot: true, // быстрая замена компонентов (без релоада страниц) п.с. работает только с чистым js
	}
}