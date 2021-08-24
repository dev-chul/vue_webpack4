import router from './router'
import store from '@/modules/main/store'
import user from '@/modules/main/store/modules/user'
// import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/', '/home'] // no redirect whitelist

console.log('===== permission.js beforeEach start..!')
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()
  if (from.path === '/') {
    to.meta['close'] = true
  }

  // determine whether the user has logged in
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasRoles = user.state.roles && user.state.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/getInfo')
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          // await store.dispatch('user/resetToken')
          // Message.error(error || 'Has Error')
          // next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      NProgress.done()
      next('/login')
      // location.href = '/main#/login'
    }
  }
})
console.log('===== permission.js beforeEach end..!')

router.afterEach(() => {
  NProgress.done()
})
