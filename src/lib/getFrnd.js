import { readFileSync } from "fs";
import { join } from "path";

export function getFriend() {
  const filePath = join(process.cwd(), "public", "data.json");
  const fileContents = readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}