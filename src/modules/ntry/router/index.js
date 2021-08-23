import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/modules/ntry/layout'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => {
    if (Router.isNavigationFailure(err)) { return err }
    return Promise.reject(err)
  })
}

export const defaultRouter = [
  {
    path: '/main',
    component: Layout,
    component: () => import('@/modules/ntry/views/Main'),
    name: 'Main',
    meta: { title: 'Main' }
  }
]

export const roleRouter = [
]

// router navigation guards 설정 파일(permission.js)에서
// 라우터를 합치기 위해 리스트로 반환
export default defaultRouter

// export default new Router({
//   base: '/ntry',
//   mode: 'history',
//   routes: defaultRouter
// })
