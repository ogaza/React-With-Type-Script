var path = require('path');

module.exports = {
    resolve: {
        alias: {
            _src: path.resolve(__dirname, '/src')
        },
        extensions: ['*', '.js', '.jsx', ".ts", ".tsx", '.css', '.less', '.png', '.svg', '.json']
    },
    // a string here because there is one file as an entry point
    // if there is more than one, then use an array
    entry: './src/app.tsx',
    // the path and name of the file that will be generated, and to be referenced in the html file
    output: {
        path: __dirname + '/public',
        filename: 'build/app.js'
    },
    resolve: {
        // by default Webpack does no load .ts and .tsx files so it needs to be told
        extensions: ['.ts', '.tsx', '.js']
    },
    // set up the loader responsible for transpiling the code
    module: {
        rules: [
            { 
                // a regular expression that tests what kind of files to run through this loader
                test: /\.tsx?$/,
                loader: 'ts-loader' 
            }
        ]
    }
}