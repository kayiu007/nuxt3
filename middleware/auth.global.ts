// 全局路由中间件，放置在 middleware/ 目录下，并以 .global 后缀结尾，在每次路由更改时运行。
export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated()是一个验证用户是否已经认证的示例方法
    // if (isAuthenticated() === false) {
    //   return navigateTo('/login')
    // }
    console.log(to,'to');
    
  })
  