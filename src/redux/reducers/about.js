const initialState = {
  about: ` Hi! My name is Michal and I am 20 years old. I study part-time at Silesian University of Technology. 
  I work with medical software, my duty is to check mistakes in software or database and try to repair them. I done advance course in
  <a href="https://szkolareacta.pl" target="blank">Szkola Reacta</a>.
  In my projects I used React, Redux, React-Router, Sass, ExpressJs.
  <br />
  In the future I would like to work as front-end developer.
  <br />
   Location: Silesia / Cracow
   <br /><br />
   `,
};

const aboutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default aboutReducer;
