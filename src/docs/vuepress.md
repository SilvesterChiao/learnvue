---
sidebar: auto
---

# 使用 vuepress 搭建个人博客

## 简介

Vue 驱动的静态网站生成器，能以markdown文件为基础快速生成一个vue官方文档风格的技术文档，支持个性化配置，支持vue组件。

<img alt="vuepress" src="./vuepress.png" width="280px" height="280px" />

## 快速起步

- 全局安装 vuepress

```bash
npm install -g vuepress
```

- 创建 git 库,src 文件夹下存放 markdown 文件
- 创建配置文件.vuepress/config.js
- 在项目根目录下启动本地服务

```bash
vuepress dev .
```

- 生成静态文件

```bash
vuepress build .
```

默认生成 dist 文件夹,建议配置成 docs,连同 src 整个 push 到 github,在 github 本项目 Settings 中设置 gitpages,选择 source 为 master branch/docs folder,然后即可通过 https://用户名.github.io/仓库名/ 访问博客

别忘了在配置文件中加上 base: '/项目名/',不然你看到的会是 404(gitpages有两种,一种是用户名.github.io项目，一种是普通项目，普通项目需要将base配置为'/项目名/',用户名项目使用默认当'/'即可)

## 图片（静态资源）

使用相对路径引用的图片会被打包到dist/assets/img文件夹下(图片过小直接编译成base64插入文档中)，例如：
图片: /assets/images/demo.png，/src/demo.md文件中使用下列语法引用即可

```markdown
[demo](./../assets/images/demo.png)
```

## markdown 扩展

### emoji

vuepress支持`:yum:`的格式插入emoji表情，快用 emoji 让你的文章更生动吧 :yum: :rage: :100:

[vuepress 支持的 emoji 列表](https://www.webfx.com/tools/emoji-cheat-sheet/)

### 目录

在文章开头使用 `[[toc]]` 即可，vuepress 会自动检测 markdown 文件中的标题，可通过配置 markdown.toc 自定义标题级别，设置侧边栏当页面不建议加目录

### 自定义容器

页面内提示输出信息，支持 `tip`，`warning`，`danger`三种

::: tip
提示块
:::

::: warning 还可以指定标题
这里是带标题的警告块
:::

### 代码块中的行高亮

可以在代码块中指定高亮的行

```js{2,5}
// 第2, 5行代码高亮
export default {
  data() {
    return {
      msg: 'Highlighted!',
    };
  },
};
```

## 配置

- base
- title
- description
- head

## 默认主题

### 首页

### 导航栏

### 侧边栏

### 搜索栏

### 更新时间

### Git仓库和编辑链接

## 进阶

- 自定义主题
- 部署

提供多种部署方式，这里介绍一下我自己使用的方法


1. 源码发布同仓库
1. 源码发布不同仓库

- 使用 vue 组件
- 多语言

中文的都写不明白呢，多语言就算了

## 常见问题

1. 侧边栏标题显示的是文档的路径, 而不是标题

不能在文档开头插入注释

2. 侧边栏显示混乱

检查是否引用了不存在的文档路径, 删除文档或者重命名文档时常有发生

3. 使用 TravisCI 发布报错

删除 yarn.lock 文件, 执行 yarn 重新生成

## 参考文档

1. [VuePress——Vue 驱动的静态网站生成器](https://vuepress.vuejs.org/zh/)
