
// CSS|SCSS (объектная типизация файла стилей)
interface IClassNames {
	[className: string]: string
}
declare module '*.module.css' {	const classNames: IClassNames; export = classNames; }
declare module '*.module.scss' { const classNames: IClassNames;	export = classNames; }