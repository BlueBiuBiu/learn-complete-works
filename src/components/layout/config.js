// 侧边栏配置
const subMenus = [
  // 前端框架
  {
    image: "/src/assets/layout-image/vue-logo.png", 
    label: 'vue文档', 
    group: [
      {
        // title: '我是标题', // 副标题
        groupItem: [
          {label: 'vue2', url: '/vue2'}, 
          {label: 'vue3', url: '/vue3'}
        ]
      }
    ]
  },
  {
    image: "/src/assets/layout-image/react-logo.jpg", 
    label: 'react文档', 
    group: [
      {
        groupItem: [
          {label: 'react', url: '/react'}, 
        ]
      }
    ]
  },
  // 前端构建工具
  {
    image: "/src/assets/layout-image/react-logo.jpg", 
    label: '前端构建工具', 
    group: [
      {
        groupItem: [
          {label: 'webpack', url: '/webpack'}, 
        ]
      },
      {
        groupItem: [
          {label: 'vite', url: '/vite'}, 
        ]
      }
    ]
  },
  // 服务端
  {
    image: "/src/assets/layout-image/react-logo.jpg", 
    label: '服务端', 
    group: [
      {
        groupItem: [
          {label: 'node', url: '/node'}, 
        ]
      },
    ]
  },
]

export {
  subMenus
}