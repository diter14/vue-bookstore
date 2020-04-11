import AuthorServices from './services'

const CREATE_AUTHOR = 'author/CREATE_AUTHOR'
const SET_AUTHORS = 'author/SET_AUTHORS'
const UPDATE_AUTHOR = 'author/UPDATE_AUTHOR'

export const AuthorStore = {
    namespaced: true,
    state: {
        authors: []
    },
    actions: {
        createAuthor: async ({ commit }, author) => {
            let response = await AuthorServices.createAuthor(author)
            commit(CREATE_AUTHOR, response.data)
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
        [UPDATE_AUTHOR](state, updatedAuthor) {
            const { authors } = state
            let updatedAuthorsState = authors.map((author) => {
                if (author.id === updatedAuthor.id) {
                    author = updatedAuthor
                }
                return author
            })
            state.authors = updatedAuthorsState
        },
    }
}