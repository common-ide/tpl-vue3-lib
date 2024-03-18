import { createApp } from 'vue'
import App from './App.vue'

// import SWorkflow from '../dist/index.mjs';
import { SZHello, create } from '../index';

const szkits = create({
    components: [
        SZHello
    ]
    // 这里可以传入一些配置项
});


console.log(444, szkits);
createApp(App).use(szkits).mount('#app')
