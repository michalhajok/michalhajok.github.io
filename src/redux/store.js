import { createStore, combineReducers } from "redux";
import socialMediaReducer from "./reducers/socialMedia";
import skillsReducer from "./reducers/skills";
import projectsReducer from "./reducers/projects";
import aboutReducer from "./reducers/about";

const rootReducer = combineReducers({
  socialMedia: socialMediaReducer,
  skills: skillsReducer,
  projects: projectsReducer,
  about: aboutReducer,
});

const store = createStore(rootReducer);

export default store;
