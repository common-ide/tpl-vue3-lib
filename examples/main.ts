import { createApp } from 'vue'
import App from './App.vue'

// import SWorkflow from '../dist/index.mjs';
import SWorkflow from '../index';

console.log(444, SWorkflow);
createApp(App).use(SWorkflow).mount('#app')
