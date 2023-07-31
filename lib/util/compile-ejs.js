// 编译模版工具函数
const ejs = require('ejs')
const path = require('path')

function compileEjs(tempName, data) {
    return new Promise((resolve, reject) => {
        // 获取当前模版路径
        const tempPath = `../template/${tempName}`
        const absolutePath = path.resolve(__dirname, tempPath)

        // 使用ejs引擎编译模版
        ejs.renderFile(absolutePath, data, (err, result) => {
            if(err) {
                console.log("编译模版失败：", err)
                reject(err)
                return
            }

            resolve(result)
        })        
    })
}

module.exports = compileEjs