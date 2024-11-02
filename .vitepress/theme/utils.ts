import {
  Color,
  Gradient,
  LineMode,
  LineModes,
  LinePositions,
  Lines,
  PluginConfig,
} from "./types";
import randomColor from "randomcolor";
import { faker } from "@faker-js/faker";

export const generateRandomColor = (withTransparent = true) =>
  faker.helpers.arrayElement([
    randomColor({ luminosity: "dark" }),
    ...(withTransparent ? ["transparent"] : []),
  ]);
export const getRandomLineMode = (): LineMode => {
  const lineMode = faker.helpers.arrayElement([
    LineModes.in,
    LineModes.out,
    LineModes.center,
    LineModes.outOver,
    LineModes.inOver,
    LineModes.top,
    LineModes.bottom,
  ]);
  return `${lineMode} ${faker.number.int({ min: 0, max: 50 })}`;
};
export const getRandomLine = (): Lines =>
  faker.helpers.arrayElement([Lines.butt, Lines.round, Lines.square]);
export const getRandomLinePosition = (): LinePositions =>
  faker.helpers.arrayElement([
    LinePositions.in,
    LinePositions.out,
    LinePositions.center,
  ]);
export const getRandomColor = (withTransparent = true): Color => {
  const gradient = faker.datatype.boolean();
  return gradient
    ? getRandomGradientColor()
    : generateRandomColor(withTransparent);
};
export const getRandomGradientColor = (): Gradient => {
  const gradientsCount = faker.number.int({ min: 2, max: 5 });
  const offset = 100 / gradientsCount;
  return {
    colors: Array.from({ length: gradientsCount }, (_, i) => ({
      color: generateRandomColor(),
      offset: i === gradientsCount - 1 ? "100" : `${i * offset}`,
      opacity: faker.number.float({ min: 0, max: 1 }),
    })),
    radial: faker.datatype.boolean(),
  };
};
export const getRandomConfig = (): PluginConfig => ({
  progress: faker.number.int({ min: 0, max: 100 }),
  thickness: faker.number.int({ min: 1, max: 30 }),
  emptyThickness: faker.number.int({ min: 0, max: 30 }),
  lineMode: getRandomLineMode(),
  linePosition: getRandomLinePosition(),
  emptyLinePosition: getRandomLinePosition(),
  line: getRandomLine(),
  color: getRandomColor(false),
  emptyColor: getRandomColor(),
  colorFill: getRandomColor(),
  emptyColorFill: getRandomColor(),
});
