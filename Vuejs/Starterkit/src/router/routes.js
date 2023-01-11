import store from "@/state/store";

export default [
  {
    path: "/",
    name: "default",
    meta: {
      authRequired: true,
    },
    component: () => import("./views/dashboards/default"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/account/login"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./views/account/register"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("./views/account/forgot-password"),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/logout",
    name: "logout",
    component: () => import("./views/account/logout"),
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } else {
          store.dispatch("authfack/logout");
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute ? { name: "default" } : { ...routeFrom }
        );
      },
    },
  },

  // Redirect any unmatched routes to the 404 page. This may
  // require some server configuration to work in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  // {
  //   path: "*",
  //   redirect: "404",
  // },
  {
    path: "/auth/login-1",
    name: "Login sample",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/login-sample"),
  },
  {
    path: "/auth/login-2",
    name: "Login-2-sample",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/login-2"),
  },
  {
    path: "/auth/register-1",
    name: "Register sample",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/register-sample"),
  },
  {
    path: "/auth/register-2",
    name: "Register-2",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/register-2"),
  },
  {
    path: "/auth/recoverpwd",
    name: "Recover pwd",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/recoverpw-sample"),
  },
  {
    path: "/auth/recoverpwd-2",
    name: "Recover pwd-2",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/recoverpwd-2"),
  },
  {
    path: "/auth/lock-screen",
    name: "Lock screen",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/lockscreen"),
  },
  {
    path: "/auth/lock-screen-2",
    name: "Lock screen-2",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/lockscreen-2"),
  },
  {
    path: "/auth/confirm-mail",
    name: "confirm-mail",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/confirm-mail"),
  },
  {
    path: "/auth/confirm-mail-2",
    name: "confirm-mail-2",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/confirm-mail-2"),
  },
  {
    path: "/auth/email-verification",
    name: "email-verification",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/email-verification"),
  },
  {
    path: "/auth/email-verification-2",
    name: "email-verification-2",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/email-verification-2"),
  },
  {
    path: "/auth/two-step-verification",
    name: "two-step-verification",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/two-step-verification"),
  },
  {
    path: "/auth/two-step-verification-2",
    name: "two-step-verification-2",
    meta: { authRequired: true },
    component: () => import("./views/sample-pages/two-step-verification-2"),
  },
  {
    path: "/pages/starter",
    name: "Starter",
    meta: { authRequired: true },
    component: () => import("./views/utility/starter"),
  },
  {
    path: "/pages/maintenance",
    name: "Maintenance",
    meta: { authRequired: true },
    component: () => import("./views/utility/maintenance"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { authRequired: true },
    component: () => import("./views/utility/coming-soon"),
  },
  {
    path: "/pages/404",
    name: "Error-404",
    meta: { authRequired: true },
    component: () => import("./views/utility/404"),
  },
  {
    path: "/pages/500",
    name: "Error-500",
    meta: { authRequired: true },
    component: () => import("./views/utility/500"),
  },
  {
    path: "/ecommerce/products",
    name: "Products",
    meta: { authRequired: true },
    component: () => import("./views/ecommerce/products"),
  },
];