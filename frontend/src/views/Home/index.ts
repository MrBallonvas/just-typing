import { IView } from "../types";
class Home implements IView {
  mount() {
    console.log("mount home view");
    const container = document.querySelector("app");
    container?.replaceChildren();

    container?.insertAdjacentHTML(
      "afterbegin",
      `<h1>Home</h1>
	<a href='/'>Home</a>
	<a href='/trainer'>Trainer</a>
	<a href='/settings'>Settings</a>
	<a href='/stats'>Stats</a>
`,
    );
  }

  unmount() {
    console.log("unmount home view");
  }
}

export default Home;
