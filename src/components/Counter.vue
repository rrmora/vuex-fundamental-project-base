<template>
    <div>
        <h1>Counter - vue</h1>
        <h2>Direcr access: {{$store.state.counter.count}}</h2>
        <h2>Computed: {{countComputed}}</h2>

        <button @click="increment()">Increment +1</button>     
        <button @click="incrementBy()" >Increment +5</button>     
        <button @click="randomInt" :disabled="isLoading">Random</button>     

        <h2>mapState</h2>
        <h2>mapState: {{count}}</h2>
        <h2>lastMutation: {{lastMutation}}</h2>

        <h2>Direct getter: {{$store.getters['counter/squarecount']}}</h2>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
   computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])

        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation,
        // })
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5) // argumentos, se puede mandar objeto {name: 'juan', edad: 43}
            // this.randomInt() // se pueden llamar dentro de los metodos las mapactions
        },
        // ...mapActions('counter', ['incrementAsync'])
        ...mapActions('counter', {
            randomInt: 'incrementAsync'
        })


        // incrementRandomInt() {
        //     this.$store.dispatch('incrementAsync')
        // }
    }
}
</script>
