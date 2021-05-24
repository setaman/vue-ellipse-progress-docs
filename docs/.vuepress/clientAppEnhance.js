import { defineClientAppEnhance } from '@vuepress/client';
import veProgress from "vue-ellipse-progress";
import HomeLayout from "./theme/layouts/HomeLayout";
import "@iconscout/unicons/css/line.css";

export default defineClientAppEnhance(({ app, router, siteData }) => {
    app.use(veProgress);
    app.component("HomeLayout", HomeLayout)
})
