export default class Router {
  constructor() {
    this.routes = {};
    this.currentRoute = "";
  }

  // Add a route
  addRoute(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  // Handle the current route
  handleRoute() {
    const path = window.location.hash.slice(1);
    const handler = this.routes[path];

    if (handler) {
      handler();
    }
  }

  // Start the router
  start() {
    window.addEventListener("hashchange", () => {
      this.handleRoute();
    });

    this.handleRoute();
  }
}
