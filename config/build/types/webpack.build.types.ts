export interface pathsBuild {
    entry: string, // to index.js
    html: string, // to index.html
    output: string, // to create folder/file
    
    src: string, // for alias
}

export interface optionsBuild {
	port: number,
    paths: pathsBuild,
	mode: 'development' | 'production',
};