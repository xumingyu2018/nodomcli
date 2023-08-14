#!/usr/bin/env node
const { program } = require("commander")
const helpOptions = require("./core/help-options")
const { createProjectAction, addComponentAction } = require("./core/actions")

// 配置所有的options
helpOptions()

// 执行create创建脚手架命令
program
    .command('create <project-name> [...others]') // 定义命令的名称
    .description('create a new Nodom project, eg: nodom-cli create app') // 描述
    .action(createProjectAction) 

// 执行addcpn添加组件命令
program
    .command('addcpn <name> [...others]')
    .description('add Nodom component, eg: nodom-cli addcpn HelloWorld.js -d src/modules')
    .action(addComponentAction)

// 让commander解析process.argv参数
program.parse(process.argv)