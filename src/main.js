import './assets/main.css';
import "amfe-flexible";

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// 引入 Vant 组件
import { 
  Button, 
  Field, 
  Form, 
  NavBar, 
  Toast, 
  Cell, 
  Dialog, 
  Tabs, 
  Tab, 
  Rate 
} from 'vant';
import 'vant/lib/index.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

// 使用需要的 Vant 组件
app.use(Button);
app.use(Field);
app.use(Form);
app.use(NavBar);
app.use(Toast);
app.use(Cell);        // 引入 Cell 组件
app.use(Dialog);      // 引入 Dialog 组件
app.use(Tabs);        // 引入 Tabs 组件
app.use(Tab);         // 引入 Tab 组件
app.use(Rate);        // 引入 Rate 组件（可用于评分功能）

app.mount('#app');
