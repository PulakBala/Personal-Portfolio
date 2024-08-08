const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "Prime University",
        degree: "B.Sc in CSE",
        detail: "Bachelor of Science in Computer Science and Engineering.",
        year: "2019-2023",
      },
      {
        id: 1,
        title: "D.K. IDEAL SYED ATAHAR ALI ACADEMY AND COLLEGE ",
        degree: "HSC, Science Subjects",
        detail: "Higher Secondary Certificate.",
        year: "Batch-2018",
      },
      {
        id: 2,
        title: "Nabagram High School",
        degree: "SSC, Science Subjects",
        detail: "Secondary School Certificate",
        year: "Batch-2016",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Prime University Computer Programming Club",
        role: "Creative Disigner",
        url: "https://jmm.ltd/",
        desc: "As a Creative Disigner, I use Figma, to build user interfaces for web applications.",
        year: "2022",
        location: "Dhaka, Bangladesh",
      },
      //   {
      //     id: 2,
      //     title: "HauzaTech",
      //     role: "Internee",
      //     url: "no website",
      //     desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
      //     year: "02/2023 - Present",
      //     location: "Peshawar, Pakistan",
      //   },
      {
        id: 3,
        title: "OMEGA NET BD",
        role: "React Developer",
        //   url: "https://www.encoderbytes.com/",
        desc: "I work as a React developer, where I've gained experience in implementing CRUD operations using JavaScript and working with Firebase.",
        year: "2024 - present",
        location: "Dhaka, Bangladesh",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
