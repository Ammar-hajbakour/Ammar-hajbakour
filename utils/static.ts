export interface ProjectViewModel {
  name: string
  images: string[]
  technologies: string[]
  liveLink?: string
  codeLink?: string
}
export const _projects: ProjectViewModel[] = [
  {
    name: "Gerich Resturant",
    images: ["/projects-images/gerich-resturant-1.png", "/projects-images/gerich-resturant-2.png"],
    technologies: ["Angular", "TypeScript", "Scss", "GSAP"],
    liveLink: "https://gerich-resturant.dxnsmartchoice.com",
    codeLink: "https://github.com/Ammar-hajbakour/gerich-resturant"
  },
  {
    name: "Carhub",
    images: ["/projects-images/carhub-1.png", "/projects-images/carhub-2.png"],
    technologies: ["Angular", "TypeScript", "SSR", "Rest API", "Tailwindcss"],
    liveLink: "https://carhub.dxnsmartchoice.com",
    codeLink: "https://github.com/Ammar-hajbakour/carhub"
  },
  {
    name: "Eraf Portfolio",
    images: ["/projects-images/eraf-1.png", "/projects-images/eraf-2.png"],
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    liveLink: "https://ammar-hajbakour.github.io/eraf-gsap",
    codeLink: "https://github.com/Ammar-hajbakour/eraf-gsap"
  },
  {
    name: "Field Production",
    images: ["/projects-images/fieldproduction-1.png", "/projects-images/fieldproduction-2.png"],
    technologies: ["Wordpress", "PHP", "CSS3"],
    liveLink: "https://fieldproduction.co",
  },
  {
    name: "Dxn Smart Choice",
    images: ["/projects-images/dxn-1.png", "/projects-images/dxn-2.png"],
    technologies: ["Woocommerce", "Wordpress", "PHP", "MySQL", "SEO", "CSS"],
    liveLink: "https://dxnsmartchoice.com",
  },
  {
    name: "Ammar Hajbakour",
    images: ["/projects-images/ammar-1.png", "/projects-images/ammar-2.png"],
    technologies: ["Nextjs", "TypeScript", "Tailwindcss", "Framer Motion"],
    liveLink: "https://ammar-hajbakour.vercel.app",
    codeLink: "https://github.com/Ammar-hajbakour/ammar-hajbakour"
  },
  {
    name: "Maze",
    images: ["/projects-images/maze-1.png", "/projects-images/maze-2.png"],
    technologies: ["Angular", "TypeScript", "OOP", "Tailwindcss", "Canvas"],
    liveLink: "https://maze.dxnsmartchoice.com",
    codeLink: "https://github.com/Ammar-hajbakour/maze"
  },
  {
    name: "Nike Clone",
    images: ["/projects-images/nike-1.png", "/projects-images/nike-2.png"],
    technologies: ["React", "Javascript", "CSS3"],
    liveLink: "https://nike.dxnsmartchoice.com",
  },

]