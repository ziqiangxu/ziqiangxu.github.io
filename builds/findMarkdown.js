const fs = require('fs')

function findMarkdown(dir, callback) {
  fs.readdir(dir, function (err, files) {
    if (err) throw err

    files.forEach((fileName) => {
      let innerDir = `${dir}/${fileName}`

      if (fileName.indexOf('.') !== 0) {
        fs.stat(innerDir, function (err, stat) {

          if (stat.isDirectory()) {
            findMarkdown(innerDir, callback)
          } else if (innerDir.toLowerCase().endsWith(".md")){
              // 只修改markdown文件
              callback(innerDir)
          }
        })
      }

    })
  })
}

module.exports = findMarkdown

