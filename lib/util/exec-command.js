// 执行命令的工具函数
const { spawn } = require('child_process')

function execCommand(...args) {
    return new Promise((resolve, reject) => {
        // 开启子进程执行命令 
        const childProcess = spawn(...args)
        // 将子进程的输入及错误信息放入process
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        // 监听子进程的关闭事件
        childProcess.on('close', () => {
            resolve()
        })
    })
}

module.exports = execCommand