import request from './utils.js'

export const search = (params) => {
    return request({
        method: 'GET',
        url: 'api-tianqi-3/index.php',
        params
    })
}
