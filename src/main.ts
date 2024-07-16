import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import RoomChecker from './components/RoomChecker.vue'
import KTVPlayer from './components/KTVPlayer.vue'

const routes = [
  { path: '/', component: RoomChecker },
  { path: '/room', component: KTVPlayer },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
