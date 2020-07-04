"use strict";
exports.__esModule = true;
exports.getSubDirs = void 0;
var fs = require("fs");
var path = require("path");
function getSubDirs(rootDir, options) {
    var subDirs = fs.readdirSync(rootDir);
    var targetDirs = [];
    subDirs.forEach(function (dir) {
        // 相对rootDir上级目录的路径【脚本执行的目录】
        var fullPath = rootDir + "/" + dir;
        // todo 忽略部分文件夹 以 . 开头的文件夹
        if (dir[0] != '.' && fs.statSync(fullPath).isDirectory()) {
            if (options.genReadme) {
                genReadme(fullPath);
            }
            // 相对rootDir的路径【文档根目录，vuepress规范】
            // console.log('====================================');
            // console.log(dir);
            // console.log('====================================');
            targetDirs.push(dir + "/");
        }
    });
    return targetDirs;
}
exports.getSubDirs = getSubDirs;
function genReadme(dir) {
    // 在目录下生成README作为索引页
    var files = fs.readdirSync(dir);
    var readme = "---\neditLink: false\n---\n";
    // 从info.json读取目录显示名字
    var sidebarName = path.basename(dir);
    var infoPath = dir + "/info.json";
    if (fs.existsSync(infoPath)) {
        var infoBuffer = fs.readFileSync(infoPath);
        var info = JSON.parse(infoBuffer.toString());
        if (info.name != undefined)
            sidebarName = info.name;
    }
    readme += "# " + sidebarName + "\n\n";
    files.forEach(function (file) {
        var filePath = dir + "/" + file;
        var stat = fs.statSync(filePath);
        if (file != "README.md" && /.md$/i.exec(file) && stat.isFile()) {
            var pageTitle = file;
            var lines = fs.readFileSync(filePath, 'utf-8').split('\n');
            // 检查markdown文件的一级标题，如果是则以之为文章名，否则以文件名为文章名
            var res = getFirstTitle(lines);
            if (res.titleFound) {
                pageTitle = res.firstTitle;
            }
            readme += "- [" + pageTitle + "](" + file + ")\n";
        }
    });
    fs.writeFileSync(dir + "/README.md", readme);
}
function getFirstTitle(lines) {
    for (var i = 0; i < lines.length; i++) {
        if (/^#\ .+$/.test(lines[i]))
            return {
                titleFound: true,
                firstTitle: lines[i].slice(2)
            };
    }
    return {
        titleFound: false,
        firstTitle: ""
    };
}
// console.log('====================================');
// console.log(process.title, process.version);
// console.log(getSubDirs('docs', {genReadme: true}))
// console.log('====================================');
