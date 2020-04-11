<template>
    <main>
        <v-row>
            <v-col cols="8">
                <h2 class="font-weight-black">Authors</h2>
            </v-col>
            <v-col cols="4" class="d-flex align-center justify-end">
                <v-btn
                    class="blue-grey darken-4"
                    dark
                    to="/authors/create"
                    >
                    <v-icon dark left>mdi-plus</v-icon> &nbsp; Author
                </v-btn>
            </v-col>
        </v-row>
    </main>
</template>
<script>
export default {
    name: 'AuthorHome'
}
</script>