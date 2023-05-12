// "use strict";
// exports.__esModule = true;
import { defaultTheme } from 'vuepress'

// 为每个目录生成索引文件
// var funSets = require("./funSets");
// funSets.getSubDirs('docs', { genReadme: true });

// 网站必要的配置文件
 export default {
    base: "/blog/",
    title: "Daryl's blog",
    lang: "zh-CN",
    description: '从开源中来，到开源中去!',
    markdown: {
        lineNumbers: true
    },
    theme: defaultTheme({
        // 导航栏
        navbar: [
            // { text: '主页', link: '/' },
            // 以斜杠结尾会路由到目录下的README.md
            { text: '未分类', link: '/accumulation/' },
            { text: '随笔', link: '/personal-diary/'},
            { text: 'CV', link: '/computer-vision/'},
            { text: '编程语言', children: [
                { text: 'Java', link: '/Java/' },
                { text: 'Golang', link: '/Golang/' },
                { text: 'Python', link: '/Python/' },
                { text: 'C/C++', link: '/C/'},
                { text: 'ECMAScript', link: '/ECMAScript/'},
            ]},
            { text: '其它', children: [
                { text: '软件工程', link: '/software-engineering/' },
                { text: '数据结构', link: '/data-structure/' },
                { text: '操作系统', link: '/OS/' },
                { text: 'Git', link: '/Git/' },
                { text: 'Qt', link: '/Qt/' },
                { text: 'Docker', link: '/Docker/' },
                { text: '网络安全', link: '/network-secure/' }
            ]},
            { text: '关于我', link: '/about-me.md'}
        ],
        // 侧边栏，需要将路径写到这个列表里
        // 注意： 目录下必须要有README.md， 【可能是因为目录最终显示的文字是来自于README.md的一级标题】
        // 目录必须以斜杠结尾， 中文目录会导致无法生成跳转到下一页的箭头
        // sidebar: funSets.getSubDirs('docs', {genReadme: false}),
        // sidebar: ['docs/Java/', 'docs/Golang/'],
        // todo 按目录对侧边栏分组，然后文章要默认显示侧边栏（各级别header）
        // sidebar: 'auto',
        // sidebar: {
        // 空字符串表示README
        // "/computer-visual/": [{title: "计算机视觉", collapsable: false, children: ["", "Numpy一些易忘点", "人工智能研究流派", "图像的形态学操作"]}],
        // "/": funSets.getSubDirs('docs', {genReadme: false})
        // },
        repo: "https://github.com/ziqiangxu/ziqiangxu.github.io",
        repoLabel: "博客源码",
        docsDir: "docs",
        editLinks: true,
        editLinkText: "改进这篇文章",
        lastUpdated: true,
        contributors: false,
        lastUpdatedText: "最后更新",
        // displayAllHeaders: true
    })
};
