// 执行命令的工具函数
const spawn = require('cross-spawn')

function execCommand(...args) {
    try {
        return new Promise((resolve, reject) => {
            const child = spawn(...args, {
                // 子进程的输入输出与父进程共享，可以在控制台上看到子进程的输出
                stdio: 'inherit'
            })
            child.on('close', () => {
                resolve()
            })
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = execCommand