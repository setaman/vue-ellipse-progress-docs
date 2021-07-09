import { defineClientAppEnhance } from '@vuepress/client';
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import HomeLayout from "./theme/layouts/HomeLayout";
import ExampleContainer from "./theme/components/Base/ExampleContainer/ExampleContainer";
import VEP from "./theme/components/Base/VEP";
import CardLink from "./theme/components/Base/CardLink";
import ProgressBasic from "./theme/examples/progress/ProgressBasic";
import LegendBasic from "./theme/examples/legend/LegendBasic";
import LegendAndProgress from "./theme/examples/legend/LegendAndProgress";
import SizeBasic from "./theme/examples/size/SizeBasic";
import SizeDependencies from "./theme/examples/size/SizeDependencies";
import Thickness from "./theme/examples/thickness/Thickness";
import LineMode from "./theme/examples/lineMode/LineMode";
import LinePosition from "./theme/examples/linePosition/LinePosition";
import EmptyLinePosition from "./theme/examples/linePosition/EmptyLinePosition";
import ColorRandom from "./theme/examples/colors/ColorRandom";
import ColorGradient from "./theme/examples/colors/ColorGradient";
import ColorGradientCrazy from "./theme/examples/colors/ColorGradientCrazy";
import "@iconscout/unicons/css/line.css";

export default defineClientAppEnhance(async ({ app, router, siteData }) => {
    app.component("Slider", Slider)
    app.component("VEP", VEP)
    app.component("CardLink", CardLink)
    app.component("HomeLayout", HomeLayout)
    app.component("ExampleContainer", ExampleContainer)
    app.component("ProgressBasic", ProgressBasic)
    app.component("LegendBasic", LegendBasic)
    app.component("LegendAndProgress", LegendAndProgress)
    app.component("SizeBasic", SizeBasic)
    app.component("SizeDependencies", SizeDependencies)
    app.component("Thickness", Thickness)
    app.component("LineMode", LineMode)
    app.component("LinePosition", LinePosition)
    app.component("EmptyLinePosition", EmptyLinePosition)
    app.component("ColorRandom", ColorRandom)
    app.component("ColorGradient", ColorGradient)
    app.component("ColorGradientCrazy", ColorGradientCrazy)
})
