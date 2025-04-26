import { IView } from "../types";

class Stats implements IView {
  mount() {
    console.log("mount stats view");
    return "<h1>Stats</h1>";
  }
  unmount() {
    console.log("unmount stats view");
  }
}
export default Stats;
