// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 // 实验性的功能，可能会在未来的某个版本中删除
  experimental: {
    // 是否允许跨域预取
    crossOriginPrefetch: true
  },
  plugins: [],
  // 页面过度
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // 生成环境
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  // 开发环境
  $development: {
    // 
    
  },
  ssr: true,

  // 调式插件
  devtools: { enabled: true },

  modules: [
    // 加载 element-plus 插件
    '@element-plus/nuxt',
    // 加载 tresjs 插件
    "@tresjs/nuxt"
    // 加载axios
  ],
  elementPlus: { /** Options */ },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/_colors.sass" as *\n'
        }
      }
    }
  }
})
