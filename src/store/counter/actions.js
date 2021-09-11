import getRandomInt from '../../helpers/getRandomInt'

export const incrementAsync = async ({commit}) => {
    commit('setLoading', true)
    const randomIn = await getRandomInt()
    commit('incrementBy', randomIn)
    commit('setLoading', false)
}