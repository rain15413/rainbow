import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "Login",
      component: () =>
      import(/* webpackChunkName: "Login" */ "../views/login/index")
    },
    {
      path: "/home",
      name: "Home",
      component: () =>
      import(/* webpackChunkName: "Home" */ "../views/home/index")
    },
    {
      path: '/404',
      name: '404',
      component: () =>
      import(/* webpackChunkName: "404" */ "../views/404/index"),
      hide: true
    },
    // 页面不存在时重定向到404
    {
        path: '*',
        hide: true,
        redirect: { path: '/404' } 
    }
  ]
});

export default router;
