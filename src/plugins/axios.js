'use strict'

import Vue from 'vue'
import axios from 'axios'
import Store from '@/store'

const token = Store.state.login.token ? Store.state.login.token : ''

let config = {
    baseURL: process.env.VUE_APP_APIURL || '',
    Autorization: `Bearer ${token}`
}

export const httpClient = axios.create(config)

Plugin.install = function (Vue) {
    Vue.axios = httpClient
    window.axios = httpClient
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return httpClient
            },
        },
        $axios: {
            get() {
                return httpClient
            },
        },
    })
}

Vue.use(Plugin)

export default Plugin
