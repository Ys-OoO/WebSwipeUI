import { defineConfig } from 'umi';
import routes from './src/router/routes';

export default defineConfig({
  routes: routes,
  plugins: ['@umijs/plugins/dist/antd', '@umijs/plugins/dist/dva'],
  antd: {},
  dva: {},
  npmClient: 'npm',
});
