import TrainerModule from "../../modules/trainer";
import { IView } from "../types";

class Trainer implements IView {
  private trainer: TrainerModule;

  constructor() {
    this.trainer = new TrainerModule();
  }

  mount() {
    console.log("mount trainer view");
    this.trainer.addKeydownListener();

    this.trainer.setOnUpdate(() => {
      const currentSymbolEl = document.getElementById("currentSymbol");
      if (currentSymbolEl) {
        currentSymbolEl.textContent = this.trainer.getCurrentSymbol();
      }
    });

    const container = document.querySelector("body");
    container?.replaceChildren();

    container?.insertAdjacentHTML(
      "afterbegin",
      `
			<h1>Trainer page</h1>
			<p>${this.trainer.getOriginalText()}</p>
			<p id='currentSymbol'>${this.trainer.getCurrentSymbol()}</p>
			<button id='startButton'>Start training</button>
		`,
    );

    const startButtonEl = document.getElementById("startButton");

    if (startButtonEl) {
      startButtonEl.addEventListener("click", this.handleStartButton);
    }
  }

  handleStartButton = () => {
    this.trainer.toggleState();
  };

  unmount() {
    this.trainer.removeKeydownListener();
    console.log("unmount trainer view");
  }
}
export default Trainer;
