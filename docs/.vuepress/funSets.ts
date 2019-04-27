import * as fs from 'fs'

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
    let sidebarName = dir.slice(5)
    readme = `# ${sidebarName}\n\n`
    files.forEach(file => {
        let stat = fs.statSync(`${dir}/${file}`)
        if (file != "README.md" && stat.isFile()) {
            readme += `- [${file}](${file})\n`
        }
    })
    fs.writeFileSync(`${dir}/README.md`, readme)
}

// console.log('====================================');
// console.log(process.title, process.version);
// console.log(getSubDirs('docs', {genReadme: true}))
// console.log('====================================');