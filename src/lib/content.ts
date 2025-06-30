// src/lib/content.ts
import yaml from "yaml";
import siteCopy from "../site-copy.yml?raw"; // Vite's raw import

export const loadContent = () => {
  return yaml.parse(siteCopy);
};
