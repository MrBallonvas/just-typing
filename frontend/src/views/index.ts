import Home from "./Home";
import Settings from "./Settings";
import Stats from "./Stats";
import Trainer from "./Trainer";
import Test from "./Test";

interface IViews {
  [key: string]: string;
}

const views: IViews = {
  "/": Home,
  "/settings": Settings,
  "/stats": Stats,
  "/trainer": Trainer,
};

export default views;
export { Test };
