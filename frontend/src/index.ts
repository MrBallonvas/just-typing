import "./index.css";
import * as router from "./router";

// listereners for render content for current route
window.addEventListener("popstate", router.renderRouteHandler);
document.addEventListener("DOMContentLoaded", router.renderRouteHandler);

// custom handler for links
document.addEventListener("click", router.linkListenerHandler);
