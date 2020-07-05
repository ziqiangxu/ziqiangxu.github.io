"use strict";
exports.__esModule = true;
var funSets = require("./funSets");
funSets.getSubDirs('docs', { genReadme: true });
// 网站必要的配置文件
module.exports = {
    base: "/blog/",
    title: " ",
    description: "description from config.js",
    themeConfig: {
        // 导航栏
        nav: [
            { text: '主页', link: '/' },
            // 必须以斜杠结尾才会路由到目录下的README
            { text: '所有文章', link: '/accumulation/' },
        ],
        // 侧边栏，需要将路径写到这个列表里
        // 注意： 目录下必须要有README.md， 【可能是因为目录最终显示的文字是来自于README.md的一级标题】
        // 目录必须以斜杠结尾， 中文目录会导致无法生成跳转到下一页的箭头
        sidebar: funSets.getSubDirs('docs', {genReadme: false}),
        // sidebar: 'auto',
        // sidebar: {
        // 空字符串表示README
        // "/computer-visual/": [{title: "计算机视觉", collapsable: false, children: ["", "Numpy一些易忘点", "人工智能研究流派", "图像的形态学操作"]}],
        // "/": funSets.getSubDirs('docs', {genReadme: false})
        // },
        // displayAllHeaders: true,
        repo: "https://github.com/ziqiangxu/ziqiangxu.github.io",
        repoLabel: "查看源码",
        docsDir: "docs",
        editLinks: true,
        editLinkText: "改进这篇文章",
        lastUpdated: "最后更新",
        displayAllHeaders: true
    }
};
