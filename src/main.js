import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入全局样式
import "./styles/index.scss";
import "~/iconfont/iconfont.css";

import VbenUi from "../packages/index";
import hljs from "highlight.js";

const app = createApp(App);
app.use(router);
app.use(VbenUi);
app.directive("highlight", function (el) {
  const blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
app.mount("#app");
