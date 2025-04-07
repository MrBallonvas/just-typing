import views from "./views";

function redirect(route: string): void {
  window.history.pushState({}, "", route);
  renderRouteHandler();
}

function linkHandler(event: Event) {
  const target = event.target as HTMLLinkElement;
  redirect(target.href);
  renderRouteHandler();
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

function renderRouteHandler() {
  const currentPath = window.location.pathname;
  const container = document.querySelector("body");
  const content = views[currentPath] || views["/"];

  container?.replaceChildren();
  container?.insertAdjacentHTML("afterbegin", content);
}

export { redirect, renderRouteHandler, linkListenerHandler };
