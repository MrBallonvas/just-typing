import { IView } from "../types";

class Settings implements IView {
  mount() {
    console.log("mount settings view");
    return "<h1>Settings</h1>";
  }
  unmount() {
    console.log("unmount settings view");
  }
}
export default Settings;
