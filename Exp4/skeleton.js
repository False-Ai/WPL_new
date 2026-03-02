const form = document.getElementById("transportForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  validateName();
  validateEmail();
  validatePhone();
  validateStops();
  validateDate();
});

function setError(element, message) {
  element.classList.add("error");
  element.nextElementSibling.innerText = message;
}

function setSuccess(element) {
  element.classList.remove("error");
  element.classList.add("success");
  element.nextElementSibling.innerText = "";
}

function validateName() {
  const name = document.getElementById("fullName");
  if (name.value.trim() === "") {
    setError(name, "Name is required");
  } else {
    setSuccess(name);
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!regex.test(email.value)) {
    setError(email, "Enter valid email");
  } else {
    setSuccess(email);
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  const regex = /^[0-9]{10}$/;

  if (!regex.test(phone.value)) {
    setError(phone, "Enter valid 10-digit phone number");
  } else {
    setSuccess(phone);
  }
}

function validateStops() {
  const source = document.getElementById("source");
  const destination = document.getElementById("destination");

  if (source.value.trim() === "") {
    setError(source, "Source required");
  } else {
    setSuccess(source);
  }

  if (destination.value.trim() === "") {
    setError(destination, "Destination required");
  } else {
    setSuccess(destination);
  }

  if (source.value === destination.value && source.value !== "") {
    setError(destination, "Source and destination cannot be same");
  }
}

function validateDate() {
  const date = document.getElementById("travelDate");
  const today = new Date().toISOString().split("T")[0];

  if (date.value < today) {
    setError(date, "Travel date cannot be past date");
  } else {
    setSuccess(date);
  }
}
