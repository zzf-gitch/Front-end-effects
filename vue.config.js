module.exports = {
    configureWebpack: {
        module: {
            rules: [{
                test: /\.pdf$/,
                use: [{
 
                    loader: 'url-loader',
                    options: {
                        limit: 2,
                        name: 'files/[name].[ext]'
                    }
                }]
            }]
        }
    }
}