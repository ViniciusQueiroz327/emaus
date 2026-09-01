export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  position?: string;
}

export const leadership: LeadershipMember[] = [
  {
    name: "Eduardo Landim",
    role: "Pastor",
    image: "/imgs/emaus/team/EduardoLandim.jpeg",
    position: "center",
  },
  {
    name: "Gabriel Machado",
    role: "Obreiro",
    image: "/imgs/emaus/team/GabrielMachado.jpeg",
    position: "center",
  },
  {
    name: "Gabriela Camargo",
    role: "Obreira",
    image: "/imgs/emaus/team/GabrielaCamargo.jpeg",
    position: "center",
  },
  {
    name: "Priscila Vilar",
    role: "Discipuladora",
    image: "/imgs/emaus/team/PriscilaVilar.jpeg",
    position: "center 25%",
  },
  {
    name: "Beatriz Gomes",
    role: "Líder Kadosh",
    image: "/imgs/kadosh/team/Bibis.jpeg",
    position: "center",
  },
];