  const form = document.getElementById("form");
  const inputName = document.getElementById("username");
  const inputPassword = document.getElementById("password");

  console.log("Script loaded. Form:", form);
  
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");

    const name = inputName.value.trim();
    const password = inputPassword.value.trim();
    
    console.log("Credentials:", name, password);

    if (name && password) {
      localStorage.setItem("name", name);
      localStorage.setItem("password", password);

      window.location.href = "../todo/home.html";
    } else {
      alert("Harap isi semua field!");
    }
  });

