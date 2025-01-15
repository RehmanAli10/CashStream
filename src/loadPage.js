import { routes } from "./Routes/routes.js";

export function loadPage(element, pathName) {
  if (routes[pathName]) {
    element.innerHTML = routes[pathName];
    return;
  }
  element.innerHTML = `<h1>Page not found</h1>`;
}
