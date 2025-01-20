export const signupPage = `
<h1>Sign Up</h1>
<p>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
<form>
<div class="field-container">
<input id="login-firstname-field" placeholder="Enter First Name" class="input-field"/>
<input id="login-lastname-field" placeholder="Enter Last Name" class="input-field"/>
</div>

<div class="field-container">
<input id="email-field" placeholder="Enter your Email" class="input-field"/>
<input id="password-field" placeholder="Enter your Password" class="input-field"/>
</div>

<div class="btn-signup-conatiner">
   <a href="/signup" class="signup-btn">Sign Up</a>
    <a href="/login" class="login-btn">Login</a>
</div>
</form>`;

export const loginPage = `
<h1>Log In</h1> 
<p>Welcome back! Please log in to access your account.</p>

<form>

<div class="field-container">
<input id="login-email-field" placeholder="Enter your Email" class="input-field"/>
   <div class="password-field-container">
   <input id="password-field" placeholder="Enter your Password" class="input-password-field"/>
   <img src="../public/icons/eye-icon.png"/>
   </div>
</div>

<div class="btn-signup-conatiner">
   <a href="/signup" class="signup-btn">Sign Up</a>
   <a href="/login" class="login-btn">Login</a>
</div>
</form>
`;
