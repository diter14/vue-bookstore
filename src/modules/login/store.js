import LoginServices from './services'

const SET_TOKEN = 'login/SET_TOKEN'

export const LoginStore = {
    namespaced: true,
    state: {
        token: ''
    },
    getters: {
        isUserConnected: state => state.token != ''
    },
    actions: {
        signIn: async ({ commit }, user) => {
            const res = await LoginServices.signIn(user)
            const token = res.data.token
            commit(SET_TOKEN, token)
        },
        signUp: async ({ commit }, user) => {
            const res = await LoginServices.signUp(user)
            const token = res.data.token
            commit(SET_TOKEN, token)
        },
    },
    mutations: {
        [SET_TOKEN](state, token) {
            localStorage.token = token
            state.token = token
        },
    },
}
