import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'
import store from './store/index.js'
import BaseCard from './components/ui/BaseCard.vue'
import BaseBadge from "./components/ui/BaseBadge.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.mount('#app');