<template>
    <v-app>
        <v-content>
            <app-bar />
            <v-container>
                <router-view />
            </v-container>
        </v-content>
    </v-app>
</template>
<script>

import AppBar from '@/components/AppBar'

export default {
    name: 'App',
    components: {
        AppBar
    }
}
</script>