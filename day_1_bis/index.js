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

const getTopValues = (input, topLimit) => {
  let maxValue = [];
  const splitInput = input.split("\n").reduce((previousValue, currentValue) => {
    if (currentValue !== "") {
      previousValue = parseInt(previousValue) + parseInt(currentValue);
    } else {
      if (maxValue.length < topLimit) {
        maxValue.push(previousValue);
      } else {
        console.log(maxValue)
        maxValue.push(previousValue);
        maxValue.sort((a, b) => b - a).pop();
      }
      previousValue = 0;
    }
    return previousValue;
  });
  return maxValue;
};

const sum = (array) =>
  array.reduce((previousValue, currentValue) => previousValue + currentValue);

const input = getInput(import.meta.url);
const topValues = getTopValues(input, 3);
const sumTopValues = sum(topValues);
console.log(sumTopValues);
