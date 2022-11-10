let email = document.getElementById("email")
let password = document.getElementById("password")

email.addEventListener("focus", () => {
  email.style.borderColor = "#16425a"
})

email.addEventListener("blur", () => {
  email.style.borderColor = "#ccc"
})

password.addEventListener("focus", () => {
  password.style.borderColor = "#16425a"
})

password.addEventListener("blur", () => {
  password.style.borderColor = "#ccc"
})
