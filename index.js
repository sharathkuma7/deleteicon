var btn = document.getElementById("btn");
btn.addEventListener("click", (stop) => {
  stop.preventDefault();

  var name = document.getElementById("name");
  var password = document.getElementById("pass");
  var email = document.getElementById("email");
  var confirmpassword = document.getElementById("confirmpass");
  var phonenumber = document.getElementById("number");

  var div_cre = document.createElement("div");
  div_cre.style.width = "400px";
  div_cre.style.margin = "20px";
  div_cre.style.height = "250px";
  div_cre.style.border = "2px solid green";

  var h3_cre1 = document.createElement("h3");
  h3_cre1.innerText = name.value;

  var h3_cre2 = document.createElement("h3");
  h3_cre2.innerText = password.value;

  var h3_cre3 = document.createElement("h3");
  h3_cre3.innerText = confirmpassword.value;

  var h3_cre4 = document.createElement("h3");
  h3_cre4.innerText = email.value;

  var h3_cre5 = document.createElement("h3");
  h3_cre5.innerText = phonenumber.value;

  var deleteicon = document.createElement("i");
  deleteicon.className = "fa-solid fa-xmark delete-icon";
  deleteicon.addEventListener("click", () => {
    div_cre.remove();
    deleteicon.remove();
  });

  div_cre.append(h3_cre1, h3_cre2, h3_cre3, h3_cre4, h3_cre5);

  document.body.append(div_cre, deleteicon);
});