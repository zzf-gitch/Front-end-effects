export const sesstore = {
    set(key , value , expries) {
        let sesscatch = { value }
        if(expries) {
            sesscatch.expries = new Date().getTime() + expries * 60 * 1000
        }
        sessionStorage.setItem(key,JSON.stringify(sesscatch))
    },
    get(key) {
        const sesscatch = sessionStorage.getItem(key)
        if(sesscatch) {
            const sess = JSON.parse(sesscatch)
            const expries = sess?.expries
            if(expries && expries < new Date().getTime()) {
                sessionStorage.removeItem(key)
            }
            return sess.value
        }
        return undefined
    },
    remove(key) {
        sessionStorage.removeItem(key)
    }
}
