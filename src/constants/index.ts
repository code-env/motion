import { useMemo } from "react";
import { CaseSensitive, Image, FormInput, TextCursorInput } from "lucide-react";

export const headerRoutes = [
  {
    name: "features",
    path: "/",
  },
  {
    name: "templates",
    path: "/templates",
  },
  {
    name: "community",
    path: "/community",
  },
  {
    name: "pricing",
    path: "/pricing",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "Playground",
    path: "/playground",
  },
];

export const options = {
  autoIndent: "full",
  contextmenu: true,
  fontFamily: "monospace",
  fontSize: 13,
  lineHeight: 24,
  hideCursorInOverviewRuler: true,
  matchBrackets: "always",
  minimap: {
    enabled: true,
  },
  scrollbar: {
    horizontalSliderSize: 4,
    verticalSliderSize: 18,
  },
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: "line",
  automaticLayout: true,
};

export const baseElements = [
  {
    name: "text",
    icon: CaseSensitive,
  },
  {
    name: "image",
    icon: Image,
  },
  {
    name: "button",
    icon: FormInput,
  },
  {
    name: "input",
    icon: TextCursorInput,
  },
];

export const annimationTypes = [
  {
    name: "",
  },
  {
    name: "Text Variants",
  },
  {
    name: "Fade In",
  },
  {
    name: "Slide In",
  },
  {
    name: "Zoom In",
  },
];

export const directions = [
  {
    name: "",
  },
  {
    name: "up",
  },
  {
    name: "right",
  },
  {
    name: "down",
  },
  {
    name: "left",
  },
];

export const types = [
  {
    name: "",
  },
  {
    name: "tween",
  },
  {
    name: "spring",
  },
];

export const useNavbarRoutes = () => {
  const routes = useMemo(
    () => [
      {
        name: "Features",
      },
      {
        name: "Templates",
      },
      {
        name: "Communities",
      },
      {
        name: "Pricing",
      },
      {
        name: "Blog",
      },
      {
        name: "Playground",
        path: "/playground",
      },
    ],

    []
  );
  return routes;
};
