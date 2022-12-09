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

const sum = (array) =>
  array.reduce((previousValue, currentValue) => previousValue + currentValue);

const getValue = (c) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters.indexOf(c) + 1;
};

const getElement = (line) => {
  const lineLength = line.length;
  const halfLetters = line.substring(0, lineLength / 2).split("");
  const secondHalfLetters = line
    .substring(lineLength / 2, lineLength)
    .split("");

  let returnElement;
  halfLetters.forEach((element) => {
    if (secondHalfLetters.includes(element)) {
      returnElement = element;
      return;
    }
  });

  return returnElement;
};

const input = getInput(import.meta.url);
const splitInput = input.split("\n");
const value = sum(splitInput.map((line) => getValue(getElement(line))));

console.log(value);
