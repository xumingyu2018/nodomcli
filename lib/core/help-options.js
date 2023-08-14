const { program } = require('commander')
const chalk = require('chalk')
const { banner } = require('../config/constant')

function helpOptions() {
    // 处理--version的操作
    const version = require('../../package.json').version
    program.version(`${chalk.green.bold(version)}`, "-v --version", "版本信息")

    // 其他options的操作
    program.option("-d --dest <dest>", "a destination folder, 例如: -d /src/modules")
    program.option("--author", "作者xmy")

    // 监听help事件
    program.on("--help", () => {
        console.log(chalk.blue.bold(banner));
        // 说明信息
        console.log(`\r\n执行 ${chalk.cyan(`nodom <command> --help`)} 查看可使用命令细节\r\n`)
    })
}

module.exports = helpOptions