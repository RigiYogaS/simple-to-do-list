  const form = document.getElementById("form");
  const inputName = document.getElementById("username");
  const inputPassword = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = inputName.value.trim();
    const password = inputPassword.value.trim();

    if (name && password) {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);

      window.location.href = "../todo/home.html";
    } else {
      alert("Harap isi semua field!");
    }
  });

