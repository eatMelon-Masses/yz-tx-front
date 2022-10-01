import { defineConfig } from '@umijs/max';
export default defineConfig({
  proxy:{
    
      '/api': {
        'target': 'http://42.193.136.125:32247/',
        'changeOrigin': true,
        'pathRewrite': { '^/api' : '/' },
        // headers:{'host': '127.0.0.1'}
      },
    
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'yarn',
});

