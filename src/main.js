import "./style.css";
import { loadPage } from "./loadPage";

document.querySelector("#app").innerHTML = `
  <header class="header-container">
      <nav class="nav-container">
        <!-- LOGO -->
        <div class="logo-container">
          <img src="./public/images/logo.png" alt="CashStream Logo" />
          <h1>CashStream</h1>
        </div>
        <!-- LINKS -->
        <ul class="links-container">
          <li class="nav-links"><a href="/">Home</a></li>
          <li class="nav-links"><a href="/careers">Careers</a></li>
          <li class="nav-links"><a href="/about">About</a></li>
          <li class="nav-links"><a href="/security">Security</a></li>
        </ul>
        <!-- BUTTONS -->
        <div class="btn-container">
          <button class="signup-btn"><a href="/signup">Sign Up</a></button>
          <button class="login-btn"><a href="/login">Login</a></button>
        </div>
      </nav>
    </header>

    <main class="content-section"></main>

    <footer>
      <!-- FOOTER CONTAINER 1 -->
      <div class="footer-container-1">
        <div class="logo-container">
          <img src="./public/images/logo.png" alt="CashStream Logo" />
          <h1>CashStream</h1>
        </div>

        <ul class="links-container">
          <li class="footer-links"><a href="#">Home</a></li>
          <li class="footer-links"><a href="#">Careers</a></li>
          <li class="footer-links"><a href="#">About</a></li>
          <li class="footer-links"><a href="#">Security</a></li>
        </ul>
      </div>

      <hr />

      <!-- FOOTER CONTAINER 2 -->
      <div class="footer-container-2">
        <div class="info-details">
          <img src="./public/icons/email-icon.png" alt="email-icon" />
          <p>vrehmanali@gmail.com</p>
        </div>
        <div class="info-details">
          <img src="./public/icons/phone-icon.png" alt="phone-icon" />
          <p>+923065004931</p>
        </div>
        <div class="info-details">
          <img src="./public/icons/address-icon.png" alt="address-icon" />
          <p>Old city,sheikhupura</p>
        </div>
      </div>

      <hr />

      <!-- FOOTER CONTAINER 3 -->
      <div class="footer-container-3">
        <div class="logos-container">
          <button class="social-btns">
            <img src="./public/icons/facebook-icon.png" alt="facebook-icon" />
          </button>
          <button class="social-btns">
            <img src="./public/icons/twitter-icon.png" alt="twitter-icon" />
          </button>

          <button class="social-btns">
            <img src="./public/icons/linkedin-icon.png" alt="linkedin-icon" />
          </button>
        </div>

        <span>CashStream All Rights Reserved</span>

        <span>Privacy Policy | Terms of Service</span>
      </div>
    </footer>
`;

const contentSection = document.querySelector(".content-section");
const signupBtn = document.querySelector(".signup-btn a");
const loginBtn = document.querySelector(".login-btn a");

const pathName = window.location.pathname;

function attachButtonEventListeners() {
  if (signupBtn) {
    signupBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const pathName = "/signup";
      history.pushState({}, "", pathName);
      loadPage(contentSection, pathName);
    });
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const pathName = "/login";
      history.pushState({}, "", pathName);
      loadPage(contentSection, pathName);
    });
  }
}
signupBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pathName = "/signup";
  history.pushState({}, "", pathName);
  loadPage(contentSection, pathName);
});

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const pathName = "/login";
  history.pushState({}, "", pathName);
  loadPage(contentSection, pathName);
});

console.log("pathName", pathName);

loadPage(contentSection, pathName);

attachButtonEventListeners();
