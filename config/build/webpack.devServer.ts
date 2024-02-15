import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { optionsBuild } from "./types/webpack.build.types";

export function webpackDevServer(options:optionsBuild): DevServerConfiguration {
    return {
		port: options.port ?? 3000,
		open: true, // открыть браузер
	}
}