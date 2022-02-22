// vitepress/config.js
module.exports = {
  title: "我的博客",// 网站标题
  description: '我的vitepress博客.', //网站描述
  base: '/FEWarehouse/', //  部署时的路径 默认 /  可以使用二级地址 /base/
  // lang: 'en-US', //语言
  // 网页头部配置，引入需要图标，css，js
  head: [
    // 改变title的图标
    [
      'link',
      {
        rel: 'icon',
        href: '/img/linktolink.png',//图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    repo: 'vuejs/vitepress', // 你的 github 仓库地址，网页的右上角会跳转
    //   头部导航
    nav: [
      {text: '前端技术', items: [
        { text: 'TS', link: '/ts/basics', activeMatch: '^/ts/' },
        { text: 'vue', link: '/skills/vue/' }
      ]}
    ],
    //   侧边导航
    sidebar: {
      '/ts/': getTsSidebar()
    }
  }
}

function getTsSidebar() {
  return [
    {
      text: '基础知识',
      children: [
        { text: '基础', link: '/ts/basics' }, // link 和 头部导航的 link 对应， 访问文件为 docs/ts/basics.md 文件
        { text: '内置类型', link: '/ts/inside-type' },
      ]
    },
  ]
}