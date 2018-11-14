let path = require('path'); // подключение path
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require('html-webpack-plugin');


let conf = { // Экпорт объекта с настройками Webpack
    entry: {
        homePage: './src/entry/index.js'
    }, // Точка входа
    output: { // Выходные параметры
        path: path.resolve(__dirname, 'dist/'), // Директория, куда будет помещаться готовые файлы
        filename: '[name].js', // Имя выходного файла
        publicPath: '' // Путь для подстановки в браузер
    },
    devServer: { // Использование DevServer
        overlay: true // Показывать слой с отладной

    },
    module: { // Модули Webpack
        rules: [
            {
                test: /\.js$/, // Переработка кода babel
                use: ["babel-loader"] // use:[] в квадратных скобказ лодеры
            },
            {
                test: /\.less$/, // переработка less кода
                use: ExtractTextPlugin.extract({ // использование ExtractTextPlugin
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'less-loader', options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'font/',
                            publicPath: 'font/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [ // Плагины для Webpack
        new ExtractTextPlugin("style.css"), // Новый плагин с настройками
        new HtmlWebpackPlugin({ // плагин для работы с html
            filename: 'index.html', // Имя выходного файла
            template: 'src/html/index.html' // Имя и путь входного файла
        }),
        new HtmlWebpackPlugin({ // плагин для работы с html
            filename: 'services.html', // Имя выходного файла
            template: 'src/html/services.html' // Имя и путь входного файла
        })
    ]
};

module.exports = (env, options) => { // module.export может быть функцией, которая принимает env и options
    let production = options.mode === 'production'; // смотрим, какой production это или нет
    conf.devtool = production
                    ? false // для продакшн нет
                    : 'eval-source-map'; // для разработка есть карта сайта
    return conf;
};