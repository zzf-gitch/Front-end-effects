export default {
    state: {
        active:true
    },
    mutations: {
        ascendingOrder(state,data) {
            console.log(state, '-----' , data);
            state.active = data
        },
        Descending(state,data) {
            console.log(state, '-----' , data);
            state.active = data
        }
    },
    actions: {

    },
}