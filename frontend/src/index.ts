import "./index.css";
import routerSetup from "./router";

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("./sw.js", { scope: "./" }).then(() => {
//       console.log("Service Worker Registered");
//     });
//   });
// }

navigator.serviceWorker.getRegistrations().then((registrations) => {
  for (const registration of registrations) {
    registration.unregister();
  }
});

routerSetup();
