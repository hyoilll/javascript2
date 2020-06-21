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

  if (localData == null) {
    //유저 정보가 없다는 건 처음 접속한다는 의미
    //그러므로 새로 입력받고 접속해야함
    askToUserInfo();
  } else {
    //유저 정보가 있다는 건 기존에 접속한 적이 있다는 의미
    //새로 입력받을 필요없이 바로 main화면 띄움
  }
}

function init() {
  loadData();
}

init();
