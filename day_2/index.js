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

// Init map
// A / X ROCK       - 1 
// B / Y PAPER      - 2 
// C / Z Scissors   - 3
const winMap = new Map();
winMap.set("AY", 6 + 2);
winMap.set("AX", 3 + 1);
winMap.set("AZ", 0 + 3);

winMap.set("BY", 3 + 2);
winMap.set("BX", 0 + 1);
winMap.set("BZ", 6 + 3);

winMap.set("CY", 0 + 2);
winMap.set("CX", 6 + 1);
winMap.set("CZ", 3 + 3);

const input = getInput(import.meta.url);
const splitInput = input.split("\n").map((e) => e.replace(" ",""));

const score = splitInput.reduce((previousValue, currentValue) => {
  return previousValue + winMap.get(currentValue);
}, 0);

console.log(score);
