import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useElementPlus } from "../src/plugins/element-plus";



const app = createApp(App);
app.use(useElementPlus);
app.use(router);
app.mount('#app');
// createApp(App).use(router).mount('#app') // 你可以这也写，但是对后续其他操作不利，所以推荐按下面的方式书写
