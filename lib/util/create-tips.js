const chalk = require('chalk');
const logSymbols = require('log-symbols')
const { initSentence, banner } = require('../config/constant')
const { finishInformation } = require('../config/constant');

function InitTips() {
    console.log(chalk.blue.bold(banner))
    console.log(logSymbols.warning, chalk.yellow('我们需要花费一些时间来创建项目...'))
    console.log()
    console.log(logSymbols.info, initSentence[0]);
    console.log(logSymbols.info, initSentence[1]);
    console.log()
    console.log(logSymbols.success, initSentence[2]);
    console.log()
    console.log(logSymbols.warning, chalk.yellow(initSentence[3]));
}

function FinishTips(projectName) {
    console.log(finishInformation);
    console.log(' ');
    console.log(chalk.white('Done. Now run:'));
    console.log(' ');
    console.log(chalk.green.bold(`   cd ${projectName}`));
    console.log(chalk.green.bold('   npm run serve'));
}

module.exports = {
    InitTips,
    FinishTips  
}