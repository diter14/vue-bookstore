<template>
    <v-simple-table
        :height="400"
        :fixed-header="true"
        >
        <template v-slot:default>
            <thead>
                <tr>
                    <th class="text-left">Author</th>
                    <th class="text-left">Country</th>
                    <th class="text-center">
                        <v-icon>mdi-cog</v-icon> 
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="author in authors" :key="author._id">
                    <td>{{ author.name }}</td>
                    <td>{{ author.country }}</td>
                    <td class="text-center">
                        <v-btn
                            small
                            dark
                            icon
                            fab
                            color="blue-grey darken-2"
                            :to="{ name: 'author_edit', params: { id: author._id } }"
                            >
                            <v-icon>mdi-pencil</v-icon> 
                        </v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
  </v-simple-table>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'AuthorList',

    created() {
        this.getAllAuthors()
    },

    computed: {
        ...mapGetters('author', ['authors']),
    },

    methods: {
        ...mapActions('author', ['getAllAuthors']),

    }
}
</script>