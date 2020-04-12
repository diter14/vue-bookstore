import AuthorServices from './services'

const CREATE_AUTHOR = 'author/CREATE_AUTHOR'
const SET_AUTHORS = 'author/SET_AUTHORS'
const SET_AUTHOR = 'author/SET_AUTHOR'
const UPDATE_AUTHOR = 'author/UPDATE_AUTHOR'

export const AuthorStore = {
    namespaced: true,
    state: {
        authors: [],
        author: {}
    },
    getters: {
        author: state => state.author,
        authors: state => state.authors,
    },
    actions: {
        createAuthor: async ({ commit }, author) => {
            let response = await AuthorServices.createAuthor(author)
            commit(CREATE_AUTHOR, response.data)
        },
        getAuthor: async ({ commit }, id) => {
            let response = await AuthorServices.getAuthor(id)
            commit(SET_AUTHOR, response.data)
        },
        getAllAuthors: async ({ commit }) => {
            let response = await AuthorServices.getAuthors()
            commit(SET_AUTHORS, response.data)
        },
        updateAuthor: async ({ commit }, { id, author }) => {
            let response = await AuthorServices.updateAuthor(id, author)
            commit(UPDATE_AUTHOR, response.data)
        }
    },
    mutations: {
        [CREATE_AUTHOR](state, author) {
            state.authors.push(author)
        },
        [SET_AUTHORS](state, authors) {
            state.authors = authors
        },
        [SET_AUTHOR](state, author) {
            state.author = author
        },
        [UPDATE_AUTHOR](state, updatedAuthor) {
            const { authors } = state
            let updatedAuthorsState = authors.map((author) => {
                if (author._id === updatedAuthor._id) {
                    author = updatedAuthor
                }
                return author
            })
            state.authors = updatedAuthorsState
        },
    }
}