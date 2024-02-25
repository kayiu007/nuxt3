// 它将作为 useFoo() 可用（文件名的驼峰形式，不包括扩展名）
// 导出一个函数，返回一个useState状态
export default function () {
    return useState('foo', () => 'bar')
  }