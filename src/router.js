import Vue from 'vue'
import Router from 'vue-router'

// router 추가하는 첫 번째 방법, 직접 선언
import ntryRouter from '@/modules/ntry/router/index'
import mainRouter from '@/modules/main/router/index'

const list = []
list.push(...ntryRouter)
list.push(...mainRouter)

// router 추가하는 두 번째 방법, 조건부 선언
if (process.env.NODE_ENV !== 'development') {
  const menuRouter = require('@/modules/menu/router/index')
  list.push(...menuRouter.default)
}

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) { return originalPush.call(this, location, onResolve, onReject) }
  return originalPush.call(this, location).catch((err) => {
    if (Router.isNavigationFailure(err)) { return err }
    return Promise.reject(err)
  })
}

const router = new Router({
  routes: list,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition != null) {
      var state = history.state
      state['y'] = savedPosition.y
      history.pushState(state, null, null)
    }
  }
})

export default router
