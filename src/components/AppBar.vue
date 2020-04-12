<template>
    <v-app-bar dark class="green darken-1">
        <v-toolbar-title>BOOK STORE</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items>
            <!-- <v-btn text exact to="/">Home</v-btn> -->
            <template v-if="$store.getters['login/isUserConnected']">
                <v-btn text to="/authors">Authors</v-btn>
                <v-btn text to="/books">Books</v-btn>
                <v-btn text to="/">Logout</v-btn>
            </template>
            <template v-else>
                <v-btn text to="/signin">Login</v-btn>
            </template>
        </v-toolbar-items>
    </v-app-bar>
</template>
<script>
export default {
    name: 'AppBar'
}
</script>