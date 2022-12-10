import { readFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const getInput = (moduleUrl) => {
  const __filename = fileURLToPath(moduleUrl);
  const __dirname = dirname(__filename);

  return readFileSync(resolve(__dirname, "./input.txt"), {
    encoding: "utf-8",
  });
};

const contain = (line, full) => {
 
  const inters = line
    .split(",")
    .flatMap((inters) => inters.split("-"))
    .map(Number);

  const minFirstInter = inters[0];
  const maxFirstInter = inters[1];
  const minSecondInter = inters[2];
  const maxSecondInter = inters[3];

  if (full) {
    return (minFirstInter <= minSecondInter &&
      maxFirstInter >= minSecondInter) ||
      (minSecondInter <= minFirstInter && maxSecondInter >= minFirstInter)
      ? 1
      : 0;
  } else {
    return (minFirstInter <= minSecondInter &&
      maxFirstInter >= maxSecondInter) ||
      (minSecondInter <= minFirstInter && maxSecondInter >= maxFirstInter)
      ? 1
      : 0;
  }
};

// let's go
const input = getInput(import.meta.url);
const splitInput = input.split("\n");
const fc = splitInput.reduce((previousValue, currentValue) => {
  return previousValue + contain(currentValue, false);
}, 0);

const pc = splitInput.reduce((previousValue, currentValue) => {
  return previousValue + contain(currentValue, true);
}, 0);

console.log(fc);
console.log(pc);
