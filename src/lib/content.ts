import yaml from "yaml";
import path from "path";
import fs from "fs";

const contentPath = path.join(process.cwd(), "site-copy.yml");

export const loadContent = () => {
  const content = fs.readFileSync(contentPath, "utf-8");
  return yaml.parse(content);
};
