const initialState = {
  socialMedia: [
    { title: "linkedin", link: "https://www.linkedin.com/in/michalhajok/" },
    { title: "github", link: "https://github.com/michalhajok" },
  ],
};

const socialMediaReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH_REDUCER":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default socialMediaReducer;
