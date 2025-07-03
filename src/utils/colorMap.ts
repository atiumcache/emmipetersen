// Utility to map color names to hex codes based on tailwind.config.cjs
export const colorNameToHex: Record<string, string> = {
  "forest-light": "#95C639",
  "forest-medium": "#7EA831",
  "forest-med": "#7EA831", // alias for convenience
  "forest-dark": "#455C1B",
  "salmon-light": "#B37A97",
  "salmon-medium": "#B33F7B",
  "salmon-dark": "#662446",
  "aqua-light": "#6E98E6",
  "aqua-medium": "#496AB3",
  "aqua-dark": "#0B1D51",
  "slate-500": "#64748b",
  // Add more mappings as needed
};

export function getHexFromColorName(color: string): string {
  if (!color) return "";
  if (color.startsWith("#")) return color;
  return colorNameToHex[color] || color;
}
