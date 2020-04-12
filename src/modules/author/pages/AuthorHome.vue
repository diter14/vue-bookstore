<template>
    <main>
        <v-row>
            <v-col cols="8">
                <h2 class="font-weight-black">Authors</h2>
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-end">
                <v-btn
                    dark
                    to="/authors/create"
                    class="blue-grey darken-2"
                    >
                    <v-icon dark left>mdi-plus</v-icon> 
                    &nbsp; Author
                </v-btn>
            </v-col>
        </v-row>
        <v-spacer/>
        <author-list/>
    </main>
</template>
<script>
import AuthorList from '../components/AuthorList'
export default {
    name: 'AuthorHome',
    components: {
        AuthorList
    }
}
</script>