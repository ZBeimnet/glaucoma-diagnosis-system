import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router/index'
// import axios from 'axios'
import './index.css'
import './styles.css'

// axios.defaults.baseURL = 'https://aait-glaucoma-diagnosis.herokuapp.com/'

createApp(App).use(router).use(store).mount('#app')
