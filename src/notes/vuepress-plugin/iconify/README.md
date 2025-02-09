---
title: plugin-iconify
author: 君莫愁
createTime: 2023/02/26 05:07:33
permalink: /vuepress-plugin/iconify/
---

<Stamps
  :stamps="['nv', { type: 'ndt', label: 'beta downloads', package: '@vuepress-plume/vuepress-plugin-iconify' }, 'ndy', 'g']"
  repo="pengzhanbo/vuepress-theme-plume"
  subpath="plugins/plugin-iconify"
  package="@vuepress-plume/plugin-iconify"
/>


## 指南

添加 `iconify` 图标库支持。并注入全局组件 `<Iconify>`

支持 iconify 所有图标，支持通过 icon name 加载图标，可在[iconify search](https://icon-sets.iconify.design/) 搜索图标使用。

## 安装

::: code-tabs
@tab  npm
``` sh
npm install @vuepress-plume/plugin-iconify
```

@tab:active yarn
``` sh
yarn add @vuepress-plume/plugin-iconify
```

@tab pnpm
``` sh
pnpm add @vuepress-plume/plugin-iconify
```
:::

## 使用

```ts
// .vuepress/config.ts
import iconifyPlugin from '@vuepress-plume/plugin-iconify'
module.exports = {
  //...
  plugins: [
    iconifyPlugin({
      componentName: 'Iconify'
    })
  ]
  // ...
}
```

### Options

```ts
interface IconifyOptions {
  /**
   * 组件名，
   * @default `Iconify`
   */
  componentName?: string
  /**
   * 默认图标颜色
   * @default `currentColor`
   */
  color?: string
  /**
   * 图标大小
   * @default '1em'
   */
  size?: string | number
}
```

## Component

```vue
<template>
  <Iconify name="material-symbols:home" color="currentColor" size="1em" />
</template>
```

### Props 

```ts
interface Props {
  name?: string
  size?: string | number
  color?: string
  mode?: 'style' | 'svg' | 'mask' | 'bg'
  style?: StyleValue
  flip?: string
  vFlip?: boolean
  hFlip?: boolean
  inline?: boolean
  rotate?: number
}
```

效果： <Iconify name="material-symbols:home" color="currentColor" size="1em" />
