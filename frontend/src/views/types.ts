export interface IView {
  mount(): void;
  unmount(): void;
}

export type ViewConstructor = new () => IView;

export interface IViews {
  [key: string]: ViewConstructor;
}
