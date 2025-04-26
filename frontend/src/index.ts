import "./index.css";
import routerSetup from "./router";

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("./sw.js", { scope: "/" }).then(() => {
//       console.log("Service Worker Registered");
//     });
//   });
// }

routerSetup();
