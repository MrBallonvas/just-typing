import TrainerModule from "../../modules/trainer";
import { IView } from "../types";
import "./index.css";

class Trainer implements IView {
  private trainer: TrainerModule;

  constructor() {
    this.trainer = new TrainerModule();
  }

  mount = () => {
    console.log("mount trainer view");

    this.trainer.addKeydownListener();

    this.trainer.setOnUpdate(() => {
      console.log("onUpdate called");
      const currentSymbolEl = document.getElementById("currentSymbol");
      if (currentSymbolEl) {
        currentSymbolEl.textContent = this.trainer.getEnteredText() ?? "_";
      }
    });

    const container = document.getElementById("app");
    container?.replaceChildren();
    container?.insertAdjacentHTML(
      "afterbegin",
      `
			<h1>Trainer page</h1>
			<div id="stats-block" class="hide"></div>
			<div class="input-wrapper">
				<p class="original-text">${this.trainer.getOriginalText()}</p>
				<p id='currentSymbol'>${this.trainer.getEnteredText()}</p>
			</div>
			<button id='startButton'>Start training</button>
		`,
    );

    const startButtonEl = document.getElementById("startButton");

    if (startButtonEl) {
      startButtonEl.addEventListener("click", this.handleStartButton);
    }
  };

  handleStartButton = () => {
    const startButtonEl = document.getElementById("startButton");

    startButtonEl?.blur();

    const statsBlockEl = document.getElementById("stats-block");

    this.trainer.toggleState();

    if (statsBlockEl) {
      statsBlockEl.classList.add("hide");
    }
  };

  unmount = () => {
    this.trainer.removeKeydownListener();
    document
      .getElementById("startButton")
      ?.removeEventListener("click", this.handleStartButton);
    console.log("unmount trainer view");
  };
}
export default Trainer;
