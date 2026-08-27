export interface Cell {
  id: string;
  name: string;
  path: string;
  colors: {
    primary: string;
    secondary: string;
  };
  image: string;
}

export const cells: Cell[] = [
  {
    id: "kadosh",
    name: "KADOSH",
    path: "/kadosh",

    colors: {
      primary: "rgba(7, 43, 95, 1)",
      secondary: "#195291",
    },

    image: "/imgs/kadosh/arts/Kadosh_no_bg.png",
  },

  {
    id: "ekballo",
    name: "EKBALLO",
    path: "/ekballo",

    colors: {
      primary: "#...",
      secondary: "#...",
    },

    image: "/imgs/ekballo/arts/Ekballo_no_bg.png",
  },
];