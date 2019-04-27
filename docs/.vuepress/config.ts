import * as funSets from './funSets'

funSets.getSubDirs('docs', {genReadme: true})

// 网站必要的配置文件
module.exports = {
    title: " ",
    description: "description from config.js",
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: 'C',
                items: [
                    {text: 'CMake库文件添加', link: "/C/CMake之库文件添加.md"},
                    {text: 'Qt获取信号发送者的地址', link: "/C/Qt获取信号发送者的地址.md"},
                    {
                        text: '使用XRecord实现Linux全局事件监听：扩展库安装篇',
                        link: '/C/使用XRecord实现Linux全局事件监听：扩展库安装篇.md'
                    }, 
                    {
                        text: '字符格式化',
                        link: '/C/字符格式化.md'
                    },
                    {
                        text: '给Qt初学者的建议',
                        link: '/C/给Qt初学者的建议.md'
                    }
                ]
            }
        ],
        // todo 自动化它
        // 侧边栏，需要将路径写到这个列表里
        // 注意： 目录下必须要有README.md， 【可能是因为目录最终显示的文字是来自于README.md的一级标题】
        // 目录必须以斜杠结尾， 中文目录会导致无法生成跳转到下一页的箭头
        sidebar: funSets.getSubDirs('docs', {genReadme: false})
    }
}