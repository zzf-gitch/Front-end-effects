module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/Front-end-effects/'
    : '/',
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