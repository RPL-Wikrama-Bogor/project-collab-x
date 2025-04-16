const passwordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const resetBtn = document.getElementById("resetBtn");
const backBtn = document.getElementById("backBtn");
const backToHomeBtn = document.getElementById("backToHomeBtn");
const resetForm = document.getElementById("resetForm");
const successMessage = document.getElementById("successMessage");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.innerHTML =
    type === "password"
      ? '<i class="fas fa-eye"></i>'
      : '<i class="fas fa-eye-slash"></i>';
});

// Add back button event listener
backBtn.addEventListener("click", function () {
  // Redirect to the previous page or home page
  window.history.back(); // or window.location.href = "index.html";
});

backToHomeBtn.addEventListener("click", function () {
  // Redirect to home page
  window.location.href = "index.html";
});

resetBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Check if email is empty
  if (!email) {
    document.getElementById("email").style.borderColor = "#ff4757";
    resetForm.classList.add("shake");
    setTimeout(() => {
      resetForm.classList.remove("shake");
      document.getElementById("email").style.borderColor = "#ddd";
    }, 500);
    return;
  }

  if (!password || !confirmPassword) {
    resetForm.classList.add("shake");
    setTimeout(() => resetForm.classList.remove("shake"), 500);
    return;
  }

  if (password !== confirmPassword) {
    confirmPasswordInput.style.borderColor = "#ff4757";
    resetForm.classList.add("shake");
    setTimeout(() => {
      resetForm.classList.remove("shake");
      confirmPasswordInput.style.borderColor = "#ddd";
    }, 500);
    return;
  }

  resetBtn.textContent = "Processing...";
  resetBtn.disabled = true;

  setTimeout(() => {
    resetForm.style.display = "none";
    document.body.style.background = "#fff";
    successMessage.classList.add("show");
  }, 1500);
});

window.addEventListener("load", function () {
  document.getElementById("email").focus();
});
