import { loginPage, signupPage } from "../pages/signupPage";

export const routes = {
  "/": `<h1>Home Page</h1>`,
  "/signup": signupPage,
  "/login": loginPage,
};
