<template>
    <v-container class="fill-height">
        <v-row 
            align="center" 
            justify="center"
            >
            <v-col cols="6">
                <v-form @submit.prevent="signIn()">
                    <v-card
                        raised
                        >
                        <v-toolbar
                            dark
                            flat
                            color="blue-grey darken-2"
                            >
                            <v-toolbar-title>
                                SIGN IN
                            </v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field
                                    label="Email"
                                    v-model="user.email"
                                    prepend-icon="person"
                                    type="email"
                                    >
                                </v-text-field>
                                <v-text-field
                                    label="Password"
                                    v-model="user.password"
                                    prepend-icon="lock"
                                    type="password"
                                    >
                                </v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions
                            class="justify-center"
                            >
                            <v-btn 
                                dark
                                type="submit"
                                color="blue-grey darken-2">
                                LOGIN
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
    name: 'SignIn',
    data() {
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signIn() {
            this.$store.dispatch('login/signIn', this.user)
            this.$router.push('/')
        }
    }
}
</script>
