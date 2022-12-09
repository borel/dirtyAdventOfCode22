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

const getValue = (c) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters.indexOf(c) + 1;
};

const input = getInput(import.meta.url);
const splitInput = input.split("\n");
let res = 0;

for (let index = 0; index < splitInput.length; index += 3) {
  const line1 = splitInput[index];
  const line2 = splitInput[index + 1];
  const line3 = splitInput[index + 2];

  for (let index = 0; index < line1.length; index++) {
    const element = line1[index];
    if (line2.includes(element) && line3.includes(element)) {
      res += getValue(element);
      break;
    }
  }
}

console.log(res);
