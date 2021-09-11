import { createStore } from "vuex";
import counterStore from './counter'


export default createStore({

    modules: {
        counter: counterStore
    }

    // state: { /// Parecido al data() {}
    //     count: 1,
    //     lastMutation: 'none',
    //     isLoading: false,
    //     lastRandom: 0
    // },
    // mutations: { // Parecido a methods() {} Modifica el state
    //     increment(state) {
    //         state.count++
    //         state.lastMutation = 'Increment'
    //     },
    //     incrementBy(state, value) {
    //         state.count += value
    //         state.lastMutation = 'IncrementBy ' + value,
    //         state.lastRandom = value
    //     },
    //     setLoading(state, value) {
    //         state.isLoading = value;
    //     }
    // },
    // actions: {// methods Asynchronous puededn n llamar mumtations
    //     // async incrementAsync(context) {
    //     async incrementAsync({commit}) {
    //         commit('setLoading', true)
    //         const randomIn = await getRandomInt()
    //         commit('incrementBy', randomIn)
    //         commit('setLoading', false)
    //     }
    // }, 
    // getters: {// parecidos a las Computed
    //     squarecount(state) {
    //         return state.count * state.count
    //     }
    // }
})