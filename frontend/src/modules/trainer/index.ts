export default class TrainerModule {
  private state: "started" | "waiting";
  private text: string;
  private originalText: string;
  private boundKeydownHandler: (event: KeyboardEvent) => void;
  private onUpdate: () => void;

  constructor() {
    this.text = "";
    this.originalText = "";
    this.state = "waiting";
    this.onUpdate = () => {};
    this.boundKeydownHandler = (_: KeyboardEvent) => {};

    this.setupVariables();
  }

  setOnUpdate(fn: () => void) {
    this.onUpdate = fn;
  }

  keydownHandler(event: KeyboardEvent) {
    console.log(this.state);
    if (this.state === "started") {
      if (this.text[0] === event.key) {
        this.text = this.text.substring(1);
        if (this.text.length === 0) {
          this.state = "waiting";
        }
        this.onUpdate();
      }
    }
  }

  start() {
    this.state = "started";
  }

  wait() {
    this.state = "waiting";
  }

  toggleState() {
    this.state === "started" ? this.wait() : this.start();
  }

  setupVariables() {
    const text = this.getText();
    this.text = text;
    this.originalText = text;
    this.onUpdate = () => {};
    this.boundKeydownHandler = this.keydownHandler.bind(this);
  }

  getText() {
    // fetch text then return
    return "i need to make text generator to gen text for tests";
  }

  getCurrentSymbol() {
    return this.text[0];
  }

  getOriginalText() {
    return this.originalText;
  }

  removeKeydownListener() {
    document.removeEventListener("keydown", this.boundKeydownHandler);
  }

  addKeydownListener() {
    document.addEventListener("keydown", this.boundKeydownHandler);
  }
}
