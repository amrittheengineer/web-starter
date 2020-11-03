const name = document.getElementById("name");
const email = document.getElementById("mail");
const pass = document.getElementById("pass");

const signUp = document.getElementById("create-me");

signUp.onclick = function () {
  fetch("http://localhost:5000/create-user", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: pass.value,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      alert("User has created successfully");
    })
    .catch((err) => alert("Something went wrong"));
};

/*

const pass = document.getElementById("pass");
const name = document.getElementById("name");
const email = document.getElementById("mail");

const signUp = document.getElementById("create-me");

signUp.onclick = function () {
  console.log(pass.value);
  console.log(name.value);
  console.log(email.value);

  fetch("http://localhost:5000/create-user", {
    method: "POST",
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      password: pass.value,
    }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

*/
