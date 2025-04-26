import Home from "./Home";
import Settings from "./Settings";
import Stats from "./Stats";
import Trainer from "./Trainer";
import Test from "./Test";
import { IViews } from "./types";

const views: IViews = {
  "/": Home,
  "/settings": Settings,
  "/stats": Stats,
  "/trainer": Trainer,
};

export default views;
export { Test };
