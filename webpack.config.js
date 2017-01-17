var webpack = require('webpack');

module.exports = {
  entry: [
    './main.js'
  ],
  output: {
    path: "./",
    filename: "ems.js",
    publicPath: '/'
  },
  module: {
		loaders: [
            {
				test: /special-buttons.html$/,
				loader: "html-loader"
			},
			{
				test: /employee.tpl.html$/,
				loader: "handlebars-loader"
			},
			{
				test: /.css$/,
				loaders: ["style", "css"]
			}
		]
	},
  devtool: "source-map"
};
