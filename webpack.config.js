const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const { readdirSync } = require("fs");
const prettier = require("prettier");
const webpack = require("webpack");

const targets = [
  "es3",
  "es5",
  "es6",
  "es2015",
  "es2016",
  "es2017",
  "es2018",
  "es2019",
  "es2020",
  "es2021",
  "es2022",
  "esnext",
];

module.exports = targets.map((target) => {
  return {
    mode: "production",
    entry: readdirSync("./cases")
      .filter((filename) => filename.endsWith(".ts"))
      .map((filename) => filename.split(".")[0])
      .reduce((obj, filename) => {
        obj[filename] = `./cases/${filename}.ts`;
        return obj;
      }, {}),
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              configFile: "tsconfig.json",
              compilerOptions: {
                target,
              },
            },
          },
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
    },
    plugins: [
      new (class MyExampleWebpackPlugin {
        // Define `apply` as its prototype method which is supplied with compiler as its argument
        apply(compiler) {
          // Specify the event hook to attach to
          compiler.hooks.emit.tapAsync(
            "MyExampleWebpackPlugin",
            (compilation, callback) => {
              const { RawSource } = webpack.sources;
              for (let asset in compilation.assets) {
                const source = compilation.assets[asset].source();
                compilation.assets[asset] = new RawSource(
                  `// terser size before prettier: ${source.length}
${prettier.format(source)}`
                );
              }
              callback();
            }
          );
        }
      })(),
    ],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({})],
    },

    output: {
      path: path.join(__dirname, "dist"),
      filename: `[name]/[name].${target}.js`,
    },
  };
});
