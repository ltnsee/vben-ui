# 安装使用
本节将介绍如何在项目中使用 vben-ui

## 安装
使用npm 或 yarn 安装

```
npm install vben-ui
yarn add vben-ui
```

## 引入 vben-ui
### 完整引入
#### 需要注意的是 css 样式文件需要单独引入。
在 main.js 中写入以下内容：
```javascript
import { createApp } from 'vue'
import App from './App.vue'
// 导入组件库
import VbenUi from 'vben-ui'
import 'vben-ui/dist/style.css';

const app = createApp(App)
app.use(VbenUi)
app.mount('#app')
```
<br/>

## 愉快开始

#### 至此 vben-ui 就引入完成并且可以使用了。

```html
<!-- html -->
<m-button>默认按钮</m-button>
<m-button type="primary">主要按钮</m-button>
```


## 按需引用

#### 您可以根据个人需要使用按需引用组件，按需引用时不需要使用 `app.use()` 方法注册。
```javascript
/*js*/
import { mButton } from 'vben-ui';
```

```html
<!-- html -->
<m-button>点击</m-button>
```

<br/>