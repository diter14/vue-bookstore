import { httpClient } from '@/plugins/axios'

export default {
    createAuthor(author) {
        return httpClient.post('/author', author)
    },
    getAuthors() {
        return httpClient.get('/author')
    },
    getAuthor(id) {
        return httpClient.get(`/author/${id}`)
    },
    updateAuthor(id, author) {
        return httpClient.put(`/author/${id}`, author)
    },
}