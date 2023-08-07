import { useMemo } from "react";

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
