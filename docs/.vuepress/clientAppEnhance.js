import { defineClientAppEnhance } from '@vuepress/client';
import HomeLayout from "./theme/layouts/HomeLayout";
import ExampleContainer from "./theme/components/Base/ExampleContainer/ExampleContainer";
import VEP from "./theme/components/Base/VEP";
import CardLink from "./theme/components/Base/CardLink";
import ProgressBasic from "./theme/examples/progress/ProgressBasic";
import LegendBasic from "./theme/examples/legend/LegendBasic";
import LegendAndProgress from "./theme/examples/legend/LegendAndProgress";
import SizeBasic from "./theme/examples/size/SizeBasic";
import SizeDependencies from "./theme/examples/size/SizeDependencies";
import "@iconscout/unicons/css/line.css";

export default defineClientAppEnhance(async ({ app, router, siteData }) => {
    app.component("VEP", VEP)
    app.component("CardLink", CardLink)
    app.component("HomeLayout", HomeLayout)
    app.component("ExampleContainer", ExampleContainer)
    app.component("ProgressBasic", ProgressBasic)
    app.component("LegendBasic", LegendBasic)
    app.component("LegendAndProgress", LegendAndProgress)
    app.component("SizeBasic", SizeBasic)
    app.component("SizeDependencies", SizeDependencies)
})
