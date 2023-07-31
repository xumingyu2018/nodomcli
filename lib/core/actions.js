// node自动promise化工具
const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const { NODOM_REPO_JS, NODOM_REPO_TS } = require('../config/repo');
const execCommand = require('../util/exec-command');
const compileEjs = require('../util/compile-ejs');
const chalk = require('chalk');
const writeFile = require('../util/write-file');
const { program } = require('commander')
const { InitTips, FinishTips } = require('./tips');
const inquirer = require('inquirer')
const logSymbols = require('log-symbols')
const { language, componentUI, dependence } = require('../config/constant');


async function createProjectAction(project) {
    try {
        const lang = await inquirer.prompt(language)
        const cpn = await inquirer.prompt(componentUI)
        const dep = await inquirer.prompt(dependence)

        // 初始化提示信息
        InitTips()

        // ts、js选择不同的模版
        await download(lang.language === "js" ? NODOM_REPO_JS : NODOM_REPO_TS, project, { clone: true })

        // 是否选择自动安装依赖
        if(dep.dependence) {
            // 判断当前系统
            const commandName = process.platform === "win32" ? "npm.cmd" : "npm";
            // 执行npm install
            await execCommand(commandName, ["install"], { cwd: `./${project}` })

            // 执行npm run dev
            await execCommand(commandName, ["run", "serve"], { cwd: `./${project}` })
            return;
        }

        // 构建完成提示信息
        FinishTips(project)

    } catch (error) {
        console.log(logSymbols.warning, chalk.red("Nodom项目构建失败!"));
    }
}

// 创建和添加组件
async function addComponentAction(cpnname) {
    // 创建一个组件组件：编写组件的模版，根据内容给模版中填充数据
    const result = await compileEjs("component.js.ejs", { name: cpnname, lowerName: cpnname.toLowerCase() })

    // 将result写到对应的文件夹
    const dest = program.opts().dest || "src/modules"
    await writeFile(`${dest}/${cpnname}.js`, result)
}

module.exports = {
    createProjectAction,
    addComponentAction
}