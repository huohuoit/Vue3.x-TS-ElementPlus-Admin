const remainingRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../../views/login.vue'),
    meta: {
      title: '登录'
    }
  },
    {
    path: '/fabric-1',
    name: 'fabric-1',
    component: () => import('../../views/fabric-test/fabric-1.vue'),
    meta: {
      title: 'fabric-1'
    }
  },
    {
    path: '/fabric-2',
    name: 'fabric-2',
    component: () => import('../../views/fabric-test/fabric-2.vue'),
    meta: {
      title: 'fabric-2'
    }
  }
];
export default remainingRouter;
