import { defineClientConfig } from "@vuepress/client";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";
import HomeLayout from "./theme/layouts/HomeLayout";
import ExampleContainer from "./theme/components/Base/ExampleContainer/ExampleContainer";
import VEP from "./theme/components/Base/VEP";
import CardLink from "./theme/components/Base/CardLink";
import ProgressBasic from "./theme/components/examples/progress/ProgressBasic";
import LegendBasic from "./theme/components/examples/legend/LegendBasic";
import LegendAndProgress from "./theme/components/examples/legend/LegendAndProgress";
import HideLegend from "./theme/components/examples/hideLegend/HideLegend";
import Reverse from "./theme/components/examples/reverse/Reverse";
import Half from "./theme/components/examples/half/Half";
import SizeBasic from "./theme/components/examples/size/SizeBasic";
import SizeDependencies from "./theme/components/examples/size/SizeDependencies";
import Thickness from "./theme/components/examples/thickness/Thickness";
import LineMode from "./theme/components/examples/lineMode/LineMode";
import Angle from "./theme/components/examples/angle/Angle";
import LinePosition from "./theme/components/examples/linePosition/LinePosition";
import EmptyLinePosition from "./theme/components/examples/linePosition/EmptyLinePosition";
import ColorRandom from "./theme/components/examples/colors/ColorRandom";
import ColorGradient from "./theme/components/examples/colors/ColorGradient";
import ColorGradientCrazy from "./theme/components/examples/colors/ColorGradientCrazy";
import ColorFillGradientCrazy from "./theme/components/examples/colorFill/ColorFillGradientCrazy";
import ColorFillRandom from "./theme/components/examples/colorFill/ColorFillRandom";
import ColorFillGradient from "./theme/components/examples/colorFill/ColorFillGradient";
import EmptyColorFillGradient from "./theme/components/examples/emptyColorFill/EmptyColorFillGradient";
import EmptyColorFillGradientCrazy from "./theme/components/examples/emptyColorFill/EmptyColorFillGradientCrazy";
import EmptyColorFillRandom from "./theme/components/examples/emptyColorFill/EmptyColorFillRandom";
import EmptyColorRandom from "./theme/components/examples/emptyColor/EmptyColorRandom";
import EmptyColorGradient from "./theme/components/examples/emptyColor/EmptyColorGradient";
import EmptyColorGradientCrazy from "./theme/components/examples/emptyColor/EmptyColorGradientCrazy";
import Animation from "./theme/components/examples/animation/Animation";
import LegendFormatterProps from "./theme/components/examples/legendFormatter/LegendFormatterProps";
import LegendFormatterHtml from "./theme/components/examples/legendFormatter/LegendFormatterHtml";
import DefaultSlot from "./theme/components/examples/slots/DefaultSlot";
import DefaultSlotColored from "./theme/components/examples/slots/DefaultSlotColored";
import Gap from "./theme/components/examples/gap/Gap";
import DataExamples from "./theme/components/examples/data/DataExamples";
import GapAnimation from "./theme/components/examples/gap/GapAnimation";
import Dash from "./theme/components/examples/dash/Dash";
import Dot from "./theme/components/examples/dot/Dot";
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
