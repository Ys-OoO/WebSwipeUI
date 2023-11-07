const routes = [
  {
    path: '/',
    redirect: "/home"
  },
  {
    path: '/home',
    redirect: '/home/:category',
    wrappers: ['@/components/CategoryFilter'],
  },
  {
    path: '/home/:category',
    component: '@/pages/VideoWaterfall',
  },
  {
    path: '/home/popular',
    component: '@/pages/VideoWaterfall',
  },
  {
    path: '/home/own',
    component: '@/pages/Own',
  }
]

export default routes;