import * as fs from 'fs'
import * as path from 'path'

export function getSubDirs(rootDir: string, options: {genReadme: boolean}) {
    let subDirs = fs.readdirSync(rootDir)
    let targetDirs = []
    subDirs.forEach((dir) => {
        // 相对rootDir上级目录的路径【脚本执行的目录】
        let fullPath = `${rootDir}/${dir}`
        // todo 忽略部分文件夹 以 . 开头的文件夹
        if (dir[0] != '.' && fs.statSync(fullPath).isDirectory()){
            if (options.genReadme) {
                genReadme(fullPath)
            }
            // 相对rootDir的路径【文档根目录，vuepress规范】
            // console.log('====================================');
            // console.log(dir);
            // console.log('====================================');
            targetDirs.push(`${dir}/`)
        }
    })
    return targetDirs
}

function genReadme(dir: string) {
    // 在目录下生成README作为索引页
    let files = fs.readdirSync(dir)
    let readme = ""
    // 从info.json读取目录显示名字
    let sidebarName = path.basename(dir)
    let infoPath = `${dir}/info.json`
    if (fs.existsSync(infoPath)) {
        let infoBuffer = fs.readFileSync(infoPath)
        let info = JSON.parse(infoBuffer.toString())
        if (info.name != undefined) sidebarName = info.name
    }
    readme = `# ${sidebarName}\n\n`
    files.forEach(file => {
        let filePath = `${dir}/${file}`
        let stat = fs.statSync(filePath)
        if (file != "README.md" && /.md$/i.exec(file) && stat.isFile()) { 
            let pageTitle = file.slice(0, file.length-3)
            let lines = fs.readFileSync(filePath, 'utf-8').split('\n')
            // 检查文件内容第一行，是不是一级标题，如果是则以之为文章名，否则以文件名为文章名
            if (/^#\ .+$/.test(lines[0])) {
                pageTitle = lines[0].slice(2)
            }
            readme += `- [${pageTitle}](${file})\n`
        }
    })
    fs.writeFileSync(`${dir}/README.md`, readme)
}

// console.log('====================================');
// console.log(process.title, process.version);
// console.log(getSubDirs('docs', {genReadme: true}))
// console.log('====================================');