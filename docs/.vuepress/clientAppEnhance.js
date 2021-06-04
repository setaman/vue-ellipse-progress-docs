import { defineClientAppEnhance } from '@vuepress/client';
import veProgress from "vue-ellipse-progress";
import HomeLayout from "./theme/layouts/HomeLayout";
import ExampleContainer from "./theme/components/Base/ExampleContainer/ExampleContainer";
import ProgressBasic from "./theme/examples/progress/ProgressBasic";
import SizeBasic from "./theme/examples/size/SizeBasic";
import SizeDependencies from "./theme/examples/size/SizeDependencies";
import "@iconscout/unicons/css/line.css";

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(veProgress);
    app.component("HomeLayout", HomeLayout)
    app.component("ExampleContainer", ExampleContainer)
    app.component("ProgressBasic", ProgressBasic)
    app.component("SizeBasic", SizeBasic)
    app.component("SizeDependencies", SizeDependencies)
})
