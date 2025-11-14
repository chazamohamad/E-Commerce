document.addEventListener("DOMContentLoaded", () => {
  const validUser = "chaza";
  const validPass = "fakepasw";

  const form = document.getElementById("loginForm");
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    feedback.textContent = "";
    feedback.className = "feedback";

    const u = (userInput.value || "").trim();
    const p = (passInput.value || "").trim();

    if (!u || !p) {
      feedback.textContent = "Please enter username and password.";
      feedback.classList.add("error");
      return;
    }

    if (u === validUser && p === validPass) {
      feedback.textContent = "Login successful — welcome!";
      feedback.classList.add("success");
      // show a browser alert as requested
      alert("Successfully logged in");
      // simulate redirect or further action:
      // window.location.href = '../Home.html';
    } else {
      feedback.textContent = "Invalid username or password.";
      feedback.classList.add("error");
    }
  });
});
