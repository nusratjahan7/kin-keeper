import { readFileSync } from "fs";
import { join } from "path";

export function getApps() {
  const filePath = join(process.cwd(), "data", "data.json");
  const fileContents = readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}