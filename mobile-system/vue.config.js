const path = require('path')

const resolve = (src) => {
    return path.resolve(__dirname, src)
}

module.exports = {
    lintOnSave: false,
    // resolve: {
    //     alias: {
    //         '@': resolve('src')
    //     }
    // }
}

