import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// const firebaseConfig = {
//   apiKey: 'AIzaSyD8pzSffzJFT01z9i6YafxjpaqZWYKuLSo',
//   authDomain: 'matri-802a0.firebaseapp.com',
//   projectId: 'matri-802a0',
//   storageBucket: 'matri-802a0.appspot.com',
//   messagingSenderId: '928590387608',
//   appId: '1:928590387608:web:7e9137093e0d1d395073ed',
//   measurementId: 'G-J6DSL4Q75Z',
// }

app.mount('#app')
