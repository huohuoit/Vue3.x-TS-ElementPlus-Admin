import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import homeRouter from './modules/home';
import remainingRouter from './modules/remaining'; // 静态路由

const constantRoutes: Array<RouteRecordRaw> = [homeRouter];

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes.concat(...remainingRouter)
});

export default router;
