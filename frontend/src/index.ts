import "./index.css";
import * as router from "./router";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(() => {
      console.log("Service Worker Registered");
    });
  });
}

// listereners for render content for current route
window.addEventListener("popstate", router.renderRouteHandler);
document.addEventListener("DOMContentLoaded", router.renderRouteHandler);

// custom handler for links
document.addEventListener("click", router.linkListenerHandler);
