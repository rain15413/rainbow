import router from './index'
// import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// const whiteList = [
//   '/login'
// ]

// 路由生命周期
router.beforeEach((to, from, next) => {
  NProgress.start();
  // next()
  console.log('router')
  if (to.path == '/login') {
    sessionStorage.removeItem('rainbow')
  } 
  let user = JSON.parse(sessionStorage.getItem('rainbow'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
    NProgress.done() // 不加会一直有滚动条在加载
  } else {
    if (to.name != 'login') {
      // var params={}
      // params.name = to.name
      // params.path = to.path
      // store.commit('ADD_TAG', params)
    }
    next()
  }
})

router.afterEach(() => {
  NProgress.done();
});
