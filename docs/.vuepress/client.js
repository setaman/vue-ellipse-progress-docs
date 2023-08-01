import { defineClientConfig } from "@vuepress/client";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import HomeLayout from "./theme/layouts/HomeLayout.vue";
import ExampleContainer from "./theme/components/Base/ExampleContainer/ExampleContainer.vue";
import VEP from "./theme/components/Base/VEP.vue";
import CardLink from "./theme/components/Base/CardLink.vue";
import ProgressBasic from "./theme/components/examples/progress/ProgressBasic.vue";
import LegendBasic from "./theme/components/examples/legend/LegendBasic.vue";
import LegendAndProgress from "./theme/components/examples/legend/LegendAndProgress.vue";
import HideLegend from "./theme/components/examples/hideLegend/HideLegend.vue";
import Reverse from "./theme/components/examples/reverse/Reverse.vue";
import Half from "./theme/components/examples/half/Half.vue";
import SizeBasic from "./theme/components/examples/size/SizeBasic.vue";
import SizeDependencies from "./theme/components/examples/size/SizeDependencies.vue";
import Thickness from "./theme/components/examples/thickness/Thickness.vue";
import LineMode from "./theme/components/examples/lineMode/LineMode.vue";
import Angle from "./theme/components/examples/angle/Angle.vue";
import LinePosition from "./theme/components/examples/linePosition/LinePosition.vue";
import EmptyLinePosition from "./theme/components/examples/linePosition/EmptyLinePosition.vue";
import ColorRandom from "./theme/components/examples/colors/ColorRandom.vue";
import ColorGradient from "./theme/components/examples/colors/ColorGradient.vue";
import ColorGradientCrazy from "./theme/components/examples/colors/ColorGradientCrazy.vue";
import ColorFillGradientCrazy from "./theme/components/examples/colorFill/ColorFillGradientCrazy.vue";
import ColorFillRandom from "./theme/components/examples/colorFill/ColorFillRandom.vue";
import ColorFillGradient from "./theme/components/examples/colorFill/ColorFillGradient.vue";
import EmptyColorFillGradient from "./theme/components/examples/emptyColorFill/EmptyColorFillGradient.vue";
import EmptyColorFillGradientCrazy from "./theme/components/examples/emptyColorFill/EmptyColorFillGradientCrazy.vue";
import EmptyColorFillRandom from "./theme/components/examples/emptyColorFill/EmptyColorFillRandom.vue";
import EmptyColorRandom from "./theme/components/examples/emptyColor/EmptyColorRandom.vue";
import EmptyColorGradient from "./theme/components/examples/emptyColor/EmptyColorGradient.vue";
import EmptyColorGradientCrazy from "./theme/components/examples/emptyColor/EmptyColorGradientCrazy.vue";
import Animation from "./theme/components/examples/animation/Animation.vue";
import LegendFormatterProps from "./theme/components/examples/legendFormatter/LegendFormatterProps.vue";
import LegendFormatterHtml from "./theme/components/examples/legendFormatter/LegendFormatterHtml.vue";
import DefaultSlot from "./theme/components/examples/slots/DefaultSlot.vue";
import DefaultSlotColored from "./theme/components/examples/slots/DefaultSlotColored.vue";
import Gap from "./theme/components/examples/gap/Gap.vue";
import DataExamples from "./theme/components/examples/data/DataExamples.vue";
import GapAnimation from "./theme/components/examples/gap/GapAnimation.vue";
import Dash from "./theme/components/examples/dash/Dash.vue";
import Dot from "./theme/components/examples/dot/Dot.vue";
import "@iconscout/unicons/css/line.css";
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
  Dot,
  DataExamples,
  ColorFillRandom,
  ColorFillGradient,
  ColorFillGradientCrazy,
  EmptyColorFillGradient,
  EmptyColorFillGradientCrazy,
  EmptyColorFillRandom,
];

export default defineClientConfig({
  enhance({ app }) {
    for (const c of components) {
      app.component(c.name ?? c.__name, c);
    }
  },
});
