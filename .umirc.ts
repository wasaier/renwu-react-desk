import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/exam', component: '@/pages/exam' },
  ],
  fastRefresh: {},
});
