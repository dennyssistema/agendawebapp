import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/yup'
import './plugins/axios'
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';

const app = createApp(App)

app
    .use(router)
    .use(vuetify)
    .mount('#app')
