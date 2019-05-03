import * as fs from 'fs'

function readLineTest() {
    let lines = fs.readFileSync('docs/Qt/README.md', 'utf-8')
    let res = lines.split('\n')
    console.log('====================================');
    console.log(res[0]);
    console.log('====================================');
}

// 调用测试函数
readLineTest()