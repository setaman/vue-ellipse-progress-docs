// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import Vep from "./components/Vep.vue";
import CardLink from "./components/Base/CardLink.vue";
import Home from "./Home.vue";
import ExampleCode from "./components/ExampleCode/ExampleCode.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Home, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app }) {
    app.component(Vep.name ?? Vep.__name, Vep);
    app.component(CardLink.name ?? CardLink.__name, CardLink);
    app.component(ExampleCode.name ?? ExampleCode.__name, ExampleCode);
  },
} satisfies Theme;
