import { type Configuration } from "webpack";
import type { optionsBuild } from "./types/webpack.build.types";

export function webpackResolvers(options:optionsBuild): Configuration['resolve'] {
    return { // форматы/расширения файлов // учитывается порядок
		extensions: ['.tsx', '.ts', '.js'],
	}
}