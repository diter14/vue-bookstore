<template>
    <main>
        <v-row>
            <v-col cols="12">
                <h2 class="font-weight-black">Edit Author</h2>
            </v-col>
        </v-row>
        <v-form ref="author_form" @submit.prevent="update()">
            <v-row>
                <v-col md="4" offset-md="2">
                    <v-text-field 
                        v-model="author.name"
                        label="Author Name">
                    </v-text-field>
                </v-col>
                <v-col md="4">
                    <v-text-field 
                        v-model="author.country"
                        label="Author Country">
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col md="12" class="text-center">
                    <v-btn
                        dark
                        type="submit"
                        class="blue-grey darken-2"
                        >
                        UPDATE
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
        <v-snackbar
            color="success" 
            :timeout="3000"
            v-model="snackbar.open"
            bottom
            right
            >
            <v-icon dark>mdi-check-circle</v-icon>
            {{ snackbar.message }}
        </v-snackbar>
    </main>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AuthorEdit',
    data() {
        return {
            // author: {
            //     name: '',
            //     country: ''
            // },
            snackbar: {
                open: false,
                message: 'Author updated successfully'
            }
        }
    },

    created() {
        this.getAuthor(this.$route.params.id)
    },

    computed: {
        ...mapGetters('author', ['author'])
    },

    methods: {
        ...mapActions('author',[
            'getAuthor',
            'updateAuthor'
        ]),

        update() {
            this.updateAuthor({ id: this.$route.params.id, author: this.author})
            this.snackbar.open = true
        }
    }
}
</script>