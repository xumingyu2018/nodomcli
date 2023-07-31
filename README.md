# nodom-cli

## 介绍

nodom 的脚手架工具，使用一条命令即可搭建 Nodom 单页应用。  
nodom-cli 预制了两种开发语言的支持：

- JavaScript
- TypeScript

用户可自由选择语言环境。

## 使用

### npm

首先需要全局安装 nodomcli1

```js
npm install nodomcli1 -g
```

待安装完成后,在目标路径下的命令行窗口内执行下列命令

```js
nodom-cli create <app-name>
```

> app-name 为项目名称

随后依据提示完成新建流程即可。

如需提升依赖下载速度，可以设置淘宝镜像源：

```js
npm config set registry http://registry.npm.taobao.org/
```
