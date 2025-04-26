import views, { Test } from "./views";
import { IView } from "./views/types";

let currentView: IView | null = null;

function redirect(route: string, qa: string = "") {
  window.history.pushState({}, "", route);
  renderRouteHandler(null, qa);
}

function linkHandler(event: Event) {
  const target = event.target as HTMLLinkElement;
  redirect(target.href);
  renderRouteHandler(null, "");
}

function linkListenerHandler(event: MouseEvent) {
  const target = event.target;
  if (target instanceof Element) {
    const link = target.closest("a");
    if (link) {
      event.preventDefault();
      linkHandler(event);
    }
  }
}

function renderRouteHandler(_: null | Event, qa: string = "") {
  if (currentView) currentView.unmount();

  const currentPath = window.location.pathname;
  const ViewClass = views[currentPath] ?? views["/"];
  currentView = new ViewClass();

  if (window.location.pathname === "/test" && qa === "test") {
    const container = document.querySelector("body");
    container?.replaceChildren();
    container?.insertAdjacentHTML("afterbegin", Test);
    return;
  }

  currentView.mount();
}

function routerSetup() {
  // listereners for render content for current route
  window.addEventListener("popstate", renderRouteHandler);
  document.addEventListener("DOMContentLoaded", renderRouteHandler);

  // custom handler for links
  document.addEventListener("click", linkListenerHandler);
}

export { redirect, renderRouteHandler };
export default routerSetup;
