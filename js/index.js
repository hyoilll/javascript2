const form = document.querySelector(".index");
const name_input = form.querySelector(".name_text");
const email_input = document.querySelector(".email_text");
const submit_btn = document.querySelector(".submit_btn");

const USER_INFO = "to_do_user";

function saveData(name, email) {
  const user = { name: name, email: email };
  const obj_to_string_user = JSON.stringify(user);
  localStorage.setItem(USER_INFO, obj_to_string_user);
}

function handleSubmit() {
  const name = name_input.value;
  const email = email_input.value;

  saveData(name, email);
}

function askToUserInfo() {
  submit_btn.addEventListener("click", handleSubmit);
}

function loadData() {
  const localData = localStorage.getItem(USER_INFO);

  askToUserInfo();
}

function init() {
  loadData();
}

init();
