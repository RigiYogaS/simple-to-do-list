window.addEventListener("load", function() {
    const username = localStorage.getItem("name");
    const password = localStorage.getItem("password");
  
    if (username && password) {
      document.getElementById("displayName").textContent = `${username}`;
      document.getElementById("displayPassword").textContent = `${password}`;
    } else {
      window.location.href = "../todo/login.html";
    }
  });
  