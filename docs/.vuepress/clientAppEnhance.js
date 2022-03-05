import { defineClientAppEnhance } from "@vuepress/client";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import HomeLayout from "./theme/layouts/HomeLayout";
import ExampleContainer from "./theme/components/Base/ExampleContainer/ExampleContainer";
import VEP from "./theme/components/Base/VEP";
import CardLink from "./theme/components/Base/CardLink";
import ProgressBasic from "./theme/examples/progress/ProgressBasic";
import LegendBasic from "./theme/examples/legend/LegendBasic";
import LegendAndProgress from "./theme/examples/legend/LegendAndProgress";
import HideLegend from "./theme/examples/hideLegend/HideLegend";
import Reverse from "./theme/examples/reverse/Reverse";
import Half from "./theme/examples/half/Half";
import SizeBasic from "./theme/examples/size/SizeBasic";
import SizeDependencies from "./theme/examples/size/SizeDependencies";
import Thickness from "./theme/examples/thickness/Thickness";
import LineMode from "./theme/examples/lineMode/LineMode";
import Angle from "./theme/examples/angle/Angle";
import LinePosition from "./theme/examples/linePosition/LinePosition";
import EmptyLinePosition from "./theme/examples/linePosition/EmptyLinePosition";
import ColorRandom from "./theme/examples/colors/ColorRandom";
import ColorGradient from "./theme/examples/colors/ColorGradient";
import ColorGradientCrazy from "./theme/examples/colors/ColorGradientCrazy";
import EmptyColorRandom from "./theme/examples/emptyColor/EmptyColorRandom";
import EmptyColorGradient from "./theme/examples/emptyColor/EmptyColorGradient";
import EmptyColorGradientCrazy from "./theme/examples/emptyColor/EmptyColorGradientCrazy";
import Animation from "./theme/examples/animation/Animation";
import LegendFormatterProps from "./theme/examples/legendFormatter/LegendFormatterProps";
import LegendFormatterHtml from "./theme/examples/legendFormatter/LegendFormatterHtml";
import DefaultSlot from "./theme/examples/slots/DefaultSlot";
import DefaultSlotColored from "./theme/examples/slots/DefaultSlotColored";
import Gap from "./theme/examples/gap/Gap";
import GapAnimation from "./theme/examples/gap/GapAnimation";
import Dash from "./theme/examples/dash/Dash";
import "@iconscout/unicons/css/line.css";

export default defineClientAppEnhance(async ({ app, router, siteData }) => {
  const components = [
    Slider,
    VEP,
    Angle,
    CardLink,
    HomeLayout,
    ExampleContainer,
    ProgressBasic,
    LegendBasic,
    LegendAndProgress,
    SizeBasic,
    SizeDependencies,
    Thickness,
    LineMode,
    LinePosition,
    EmptyLinePosition,
    ColorRandom,
    ColorGradient,
    ColorGradientCrazy,
    HideLegend,
    DefaultSlot,
    DefaultSlotColored,
    Reverse,
    Half,
    Animation,
    LegendFormatterProps,
    LegendFormatterHtml,
    EmptyColorRandom,
    EmptyColorGradient,
    EmptyColorGradientCrazy,
    Gap,
    GapAnimation,
    Dash,
  ];

  for (const c of components) {
    app.component(c.name, c);
  }
});
