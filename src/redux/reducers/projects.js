const initialState = {
  projects: [
    {
      title: "Shop App",
      linkGithub: "https://github.com/michalhajok/shop_app",
      linkDemo: "https://michalhajok.github.io/shop_app",
      about:
        "This app is an online shop, in which you can search products by its category. You can also add products to your online basket. ",
    },
    {
      title: "Workout App",
      linkGithub: "https://github.com/michalhajok/project06",
      linkDemo: "https://michalhajok.github.io/project06/",
      about:
        "In this application you can create your own workout plan and save your results. Also, you can find out which exercise you can do at the gym.",
    },
    {
      title: "Places App",
      linkGithub: "https://github.com/michalhajok/project03",
      linkDemo: "https://michalhajok.github.io/project03/",
      about:
        "You can filter your results by city, name and various categories. You can add cool places yourself and update places descriptions.",
    },
  ],
};

const projectsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default projectsReducer;
