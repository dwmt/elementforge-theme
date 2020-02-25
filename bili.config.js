/** @type {import('bili').Config} */
module.exports = {
	input: 'src/ElementForgeTheme.js',
	output: {
		extractCSS: false,
		format: 'esm'
	},
	plugins: {
		vue: true
	}
}
