export default class TrainerModule {
  private state: "start" | "wait";
  private text: string;
  private enteredText: string;
  private originalText: string;
  private boundKeydownHandler: (event: KeyboardEvent) => void;
  private onUpdate: () => void;

  constructor() {
    this.text = "";
    this.enteredText = "";
    this.originalText = "";
    this.state = "wait";
    this.onUpdate = () => {};
    this.boundKeydownHandler = () => {};

    this.setupNewText();
  }

  setOnUpdate = (fn: () => void) => {
    this.onUpdate = () => {
      fn();
    };
    console.log("set onUpdate: ", this.onUpdate);
  };

  keydownHandler(event: KeyboardEvent) {
    if (this.state === "start") {
      if (this.text[0] === event.key) {
        this.enteredText += this.text[0];
        this.onUpdate();

        this.text = this.text.substring(1);
        if (this.text.length === 0) {
          this.wait();
          return;
        }
      }
    }
  }

  start = () => {
    this.state = "start";
    this.setupNewText();
  };

  wait = () => {
    this.state = "wait";
  };

  toggleState = () => {
    this.state === "start" ? this.wait() : this.start();
  };

  setupNewText = () => {
    const text = this.getText();
    this.text = text;
    this.enteredText = "";
    this.originalText = text;
    this.boundKeydownHandler = this.keydownHandler.bind(this);
  };

  getText = () => {
    // fetch text then return
    return "i need to make text generator to gen text for tests";
  };

  getEnteredText = () => {
    return this.enteredText;
  };

  getOriginalText = () => {
    return this.originalText;
  };

  removeKeydownListener = () => {
    document.removeEventListener("keydown", this.boundKeydownHandler);
  };

  addKeydownListener = () => {
    document.addEventListener("keydown", this.boundKeydownHandler);
  };
}
