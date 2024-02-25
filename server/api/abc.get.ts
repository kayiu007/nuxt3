// 静态的内容这样获取,有更好的seo
import abc from '@/database/abc.json'
export default defineEventHandler(() => {
    return abc
})