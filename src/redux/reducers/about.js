const initialState = {
  about: ` Hi! My name is Michal. I am 20 years old. 
  I study part-time at Silesian University of  Technology. I work with medical software. In my work 
  I check mistakes in software or database and try to repair the mistakes.
  I done advance course in <a href="https://szkolareacta.pl" target="blank">Szkola Reacta</a>.
  In my projects I used React, Redux, React-Router, Sass, ExpressJs.
  <br />
  In future I would like to get a job as front-end developer. 
  <br />
   Location: Silesia / Cracow
   <br /><br />
   `,
};

//  In my projects I use React, Sass and Api. All my projects can be found at my Github .

// I’m an engineer who isn’t glad with previous career as a HVAC
// systems designer and decided to change path of career. Everyday
//I improve my front-end skills and still learn new things.
// I can make webpages, e-commerce websites and simple apps such as to-do apps using React.js or Vanilla.js.
// I know tools such as React Hooks, React Router or Context API. Soon
// I’m going to learn TypeScript and Gatsby.js.
// In the future I see myself as a professional Front-End-Developer / Full-Stack Developer and step by step
//I realize my plan. By joining your company I commiting to make myself and my job the best as
// I can. Best Regards.

const aboutReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FETCH":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default aboutReducer;
