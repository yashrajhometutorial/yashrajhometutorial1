const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar){
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}

if (close){
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}
// Sample user data
const users = [
  { username: "kishika", password: "kishika", role: "kishika" },
  { username: "kishikapar", password: "kishikapar", role: "kishikapar" },
  { username: "yashrajtut", password: "yashrajtut", role: "yashrajtut" },
  { username: "ankitatut", password: "ankitatut", role: "ankitatut" },
  { username: "varuntut", password: "varuntut", role: "varuntut" },
  { username: "mansistud", password: "mansistud", role: "mansistud" },
  { username: "archanastud", password: "archanastud", role: "archanastud" },
  // Add more users as needed
];

function login() {
  const usernameInput = document.getElementById("username").value;
  const passwordInput = document.getElementById("password").value;

  // Find user in the users array
  const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

  if (user) {
    // Redirect based on user's role
    switch (user.role) {
      case "kishika":
        window.location.href = "kishika.html";
      case "kishikapar":
        window.location.href = "kishikapar.html";
        break;
      case "yashrajtut":
        window.location.href = "yashrajtut.html";
        break;
      case "ankitatut":
        window.location.href = "ankitatut.html";
        break;
      case "varuntut":
        window.location.href = "varuntut.html";
        break;
      case "mansistud":
        window.location.href = "masnistud.html";
        break;
      case "archanastud":
        window.location.href = "archanastud.html";
        break;
      default:
        document.getElementById("message").innerText = "Invalid user role";
    }
  } else {
    document.getElementById("message").innerText = "Invalid username or password";
  }
}
