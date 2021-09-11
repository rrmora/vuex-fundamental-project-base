

import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterState = {
    namespaced: true,
    state, /// Parecido al data() {}
    mutations, // Parecido a methods() {} Modifica el state        
    actions,// methods Asynchronous puededn n llamar mumtations        
    getters// parecidos a las Computed

}

export default counterState