const initialState = {
  technologies: [
    {
      title: "Html",
      icon: ["fab", "html5"],
      level: "Good",
      color: "#F16529",
    },
    {
      title: "Css",
      icon: ["fab", "css3-alt"],
      level: "Good",
      color: "#2965f1",
    },
    {
      title: "Javascript",
      icon: ["fab", "js"],
      level: "Good",
      color: "f0db5f",
    },
    {
      title: "React",
      icon: ["fab", "react"],
      level: "Good",
      color: "#61dbfb",
    },
    {
      title: "Sass",
      icon: ["fab", "sass"],
      level: "Basic",
      color: "#cc6699",
    },
    {
      title: "NodeJS",
      icon: ["fab", "node"],
      level: "Basic",
      color: "#3c873a",
    },
    {
      title: "Git",
      icon: ["fab", "git-alt"],
      level: "OK",
      color: "#f1502f",
    },
    {
      title: "Databases",
      icon: ["fas", "database"],
      color: "#5999c3",
      level: "Basic",
    },
  ],
  languages: [
    { title: "Polish", flag: "pl", level: "native" },
    { title: "English", flag: "gb", level: "B1 / B2" },
  ],
};

const skillsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default skillsReducer;
