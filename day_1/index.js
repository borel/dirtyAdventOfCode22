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

const getMaxValue = (input) => {
  let maxValue = 0;
  const splitInput = input.split("\n").reduce((previousValue, currenValue) => {
    if (currenValue !== "") {
      previousValue = parseInt(previousValue) + parseInt(currenValue);
    } else {
      if (previousValue > maxValue) {
        maxValue = previousValue;
      }
      previousValue = 0;
    }
    return previousValue;
  });
  return maxValue;
};

const input = getInput(import.meta.url);
const maxValue = getMaxValue(input);
console.log(maxValue);
