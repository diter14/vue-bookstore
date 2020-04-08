<template>
    <v-container
        class="fill-height"
        >
        <v-row 
            align="center" 
            justify="center"
            >
            <v-col cols="6">
                <v-form @submit.prevent="signUp()">
                    <v-card
                        raised
                        >
                        <v-toolbar
                            dark
                            flat
                            color="primary"
                            >
                            <v-toolbar-title>
                                Book Store Register
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-text-field
                                v-model="user.email"
                                label="Email"
                                prepend-icon="person"
                                type="email"
                                >
                            </v-text-field>
                            <v-text-field
                                v-model="user.password"
                                label="Password"
                                prepend-icon="lock"
                                type="password"
                                >
                            </v-text-field>
                        </v-card-text>
                        <v-card-actions
                            class="justify-center"
                            >
                            <v-btn 
                                dark
                                type="submit"
                                color="primary">
                                SIGNUP
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'SignUp',
    data() {
        return {
            user: { email: '', password: '' }
        }
    },
    methods: {
        signUp() {
            this.$store.dispatch('login/signUp', this.user)
            this.$router.push('/')
        }
    }
}
</script>
