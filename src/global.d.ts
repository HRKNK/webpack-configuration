
// CSS|SCSS (объектная типизация файла стилей)
interface IClassNames {
	[className: string]: string
}
declare module '*.module.css' {	const classNames: IClassNames; export = classNames; }
declare module '*.module.scss' { const classNames: IClassNames;	export = classNames; }

// IMAGE
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

// SVG
declare module "*.svg" {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}