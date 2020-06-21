const form = document.querySelector("#main");
const user_name = form.querySelector("#main .header .user_name");
const user_email = document.querySelector("#main .header .user_email");

const USER_INFO = "to_do_user";

function loadData() {
  //   //localstorage에서 user id, email정보를 받아옴
  const local_user_info = localStorage.getItem(USER_INFO);

  const string_user_info = JSON.parse(local_user_info);

  user_name.innerText = string_user_info.name;
  user_email.innerText = string_user_info.email;
}

function init() {
  loadData();
}

init();
