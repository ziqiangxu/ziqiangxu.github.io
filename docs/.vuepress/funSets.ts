import * as fs from 'fs'
// 在某个文件夹下产生README.md索引
export function getSubDirs(rootDir: string) {
    let subDirs = fs.readdirSync(rootDir)
    let targetDirs = []
    subDirs.forEach((dir) => {
        let fullPath = `${rootDir}/${dir}`
        // todo 忽略部分文件夹 以 . 开头的文件夹
        if (dir[0] != '.' && fs.statSync(fullPath).isDirectory()){
            targetDirs.push(`${dir}/`)
        }
    })
    return targetDirs
}

export function getReadme() {

}

console.log('====================================');
// console.log(process.title, process.version);
console.log(getSubDirs('docs'))
console.log('====================================');