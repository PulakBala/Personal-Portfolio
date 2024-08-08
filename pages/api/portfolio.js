const portfolio = [
  {
    id: 0,
    projectName: "CINEMATIC VISION",
    url: "https://cinematic-vision.vercel.app/",
    image: "projects/cinematic-vision.png",
    projectDetail:
      "The website Cinematic Vision offers a curated collection of film and cinema-related content. It features film reviews, analyses, and recommendations to enhance your cinematic experience.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Redux",
      },
      {
        tech: "SCSS",
      },
      {
        tech: "Ant Design",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "360GRAM",
    url: "https://360gram.netlify.app/",
    image: "projects/360gram.png",
    projectDetail:
      "The digital marketing agency website offers comprehensive strategies to elevate your brand's online presence. It provides tailored solutions in SEO, social media, and content marketing to drive growth and engagement.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "AOS Animation",
      },
      {
        tech: "CSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "DeXo MarT",
    url: "https://dexo-mart.netlify.app/",
    image: "projects/dexomart.png",
    projectDetail:
      "Dexo Mart is a sleek, modern e-commerce platform designed to enhance your shopping experience with its user-friendly interface and comprehensive product selection. Explore a seamless blend of style and functionality as you browse and shop with ease.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Firebase",
      },
      {
        tech: "REST API's",
      },
      {
        tech: "Aos Animation",
      },
      {
        tech: "Bootstrap",
      },
    ],
  },
  {
    id: 0,
    projectName: "AC International",
    url: "https://alsn.app/",
    image: "projects/ac.png",
    projectDetail:
      "AC International is a robust import-export management tool designed to simplify and streamline your trade operations. With its intuitive interface, it offers efficient tracking, management, and analysis of international shipments, making global trade more accessible and organized.",
    technologiesUsed: [
      {
        tech: "ReactJS",
      },
      {
        tech: "Daisyui",
      },
      {
        tech: "Aos Animation",
      },
      {
        tech: "TailwindCSS",
      },
    ],
  },
  {
    id: 0,
    projectName: "World Leaders Portal",
    url: "https://genuine-squirrel-15a045.netlify.app/",
    image: "projects/portal.png",
    projectDetail:
      "World Leaders Portal is an interactive platform that provides comprehensive information on global leaders, including their profiles, achievements, and roles. Explore detailed insights and up-to-date data to better understand the key figures shaping our world.",
    technologiesUsed: [
      {
        tech: "Javascript",
      },
      {
        tech: "Bootstrap",
      },
    ],
  },

  // {
  //   id: 2,
  //   projectName: "",
  //   url: "",
  //   image: "",
  //   projectDetail:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
  //   technologiesUsed: [
  //     {
  //       tech: "ReactJS",
  //     },
  //     {
  //       tech: "NodeJS",
  //     },
  //     {
  //       tech: "REST API's",
  //     },
  //     {
  //       tech: "Ant Design",
  //     },
  //     {
  //       tech: "TailwindCSS",
  //     },
  //   ],
  // },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
