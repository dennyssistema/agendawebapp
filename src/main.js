import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/yup'
import './plugins/axios'
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import pinia from './plugins/pinia';
import axios from 'axios';
import { useMeStore } from './stores/me';

const app = createApp(App).use(pinia)
const meStore = useMeStore()

meStore.getMe()
    .finally(() => {
        app
            .use(router)
            .use(vuetify)
            .mount('#app')
    })
