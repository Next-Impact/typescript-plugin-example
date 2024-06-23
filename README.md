# typescript-plugin-example
这是一个 Typescript 插件的示例项目，用于展示如何开发一个 Yunzai 插件。

## 项目结构
建议从 src/apps/hello.ts 开始看起。

- apps - 用来放所有机器人的命令代码
- lib - 用来放一些工具类
- model - 因为别的插件是这样放的所以我也放在这里了，是否合适有待商榷？
- resources - 用来放一些资源文件，例如图片，HTML 模版等
- yz-type-loader - 用来加载开发时需要用到的类型定义
- main.ts - 入口文件

## 如何编译
1. git clone 下来之后，执行 `npm install` 安装依赖
2. 执行 `npm run build` 编译项目。编译好的文件在 build 目录下。

## 如何运行
将 build/src 目录下的全部文件复制到机器人 plugins/typescript-plugin-example 目录下，然后重启机器人即可。

目前有地方写死 typescript-plugin-example 这个名字，需要改改

## 参考
示例项目只是一个简单的示例，实际开发中可能会有更多的需求。
这就需要

- 去读 [Yunzai](https://github.com/TimeRainStarSky/Yunzai) 的源码，了解它的实现细节，然后再去实现。
- 去抄别人的代码，然后再去实现。
- 在群里问（