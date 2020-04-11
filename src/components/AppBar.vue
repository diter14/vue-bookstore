<template>
    <v-app-bar dark class="green lighten-1">
        <v-toolbar-title>BOOK STORE</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
            <v-btn text exact to="/">Home</v-btn>
            <v-btn text to="/authors">Authors</v-btn>
            <v-btn text to="/books">Books</v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>
<script>
export default {
    name: 'AppBar'
}
</script>