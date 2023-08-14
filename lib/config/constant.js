const figlet = require('figlet')

/**
 * figlet绘制banner
 */
const banner = figlet.textSync(
    'Nodom',
    {
        font: "big",
        // 自适应宽度
        horizontalLayout: "fitted",
        verticalLayout: "controlled smushing",
        width: 600,
        whitespaceBreak: true,
    }
)

/**
 * 项目初始化语句
 */
const initSentence = [
    '初始化新项目...',
    '初始化文件...',
    '初始化文件完成！',
    '等待下载依赖安装包，这也许会花一些时间...',
    '依赖包安装完成！',
    '项目初始化完成！'
]

/**
 * 项目构建成功结束语
 */
const finishInformation = [
    '                                感谢使用nodom！                  ',
    '                   请给我们的框架提出合理的建议，以便给您更好的体验。    ',
    '                                我们将不胜感激！                   ',
    '                                                  ',
    '                           官网：http://www.nodom.cn/webroute/home             ',
    '                       源码： https://gitee.com/weblabsw/nodom3    ',
]

const language = {
    name: 'language',
    type: 'list',
    message: 'Choosing a programming language',
    choices: [{
        name: 'JavaScript',
        value: 'js'
    }, {
        name: 'TypeScript',
        value: 'ts'
    }],
}

const componentUI = {
    name: 'componentUI',
    type: 'confirm',
    message: 'Add Nodom-UI into your project?'
}

const dependence = {
    name: 'dependence',
    type: 'confirm',
    message: 'Nodom-cli automatic download dependency?'
}

module.exports = {
    banner,
    initSentence,
    finishInformation,
    language,
    componentUI,
    dependence,
}