const form = document.querySelector(".todo_list");
const add_btn = form.querySelector(".add_btn .icon");
const add_input = document.querySelector(".add_btn");
const toDos = document.querySelector(".todos");

const USER_INFO = "to_do_user";
const IS_SHOWING = "showing";

let to_do_list_obj = [];

function saveData_localStorage() {
  const user_name = JSON.parse(localStorage.getItem(USER_INFO)).name;
  localStorage.setItem(user_name, JSON.stringify(to_do_list_obj));
}

function saveData_obj(to_do_str) {
  const list_number = to_do_list_obj.length + 1;

  const item = {
    content: to_do_str,
    id: list_number,
  };

  to_do_list_obj.push(item);

  console.log(to_do_list_obj);

  //savelocalstorage
  saveData_localStorage();
}

function paint_toDos() {
  const user_name = JSON.parse(localStorage.getItem(USER_INFO)).name;

  const user_to_do_list = JSON.parse(localStorage.getItem(user_name));

  for (let i = 0; i < user_to_do_list.length; ++i) {
    const to_do_li = document.createElement("li");
    const to_do_span = document.createElement("span");
    const to_do_del_icon = document.createElement("span");

    to_do_del_icon.className = "fas fa-minus-square";
    const toDo_content = user_to_do_list[i].content;

    to_do_span.innerText = toDo_content;

    to_do_li.appendChild(to_do_span);
    to_do_li.appendChild(to_do_del_icon);
    toDos.appendChild(to_do_li);

    saveData_obj(toDo_content);
  }
}

function handleAddToDos(event) {
  event.preventDefault();

  const to_do_div = document.querySelector(".to_do_div");

  let to_do_input_text = document.querySelector(".to_do_input").value;
  to_do_div.classList.add(IS_SHOWING);

  if (to_do_input_text != "") {
    document.querySelector(".to_do_input").value = "";

    const to_do_li = document.createElement("li");
    const to_do_span = document.createElement("span");
    const to_do_del_icon = document.createElement("span");

    to_do_del_icon.className = "fas fa-minus-square";
    to_do_span.innerText = to_do_input_text;

    to_do_li.appendChild(to_do_span);
    to_do_li.appendChild(to_do_del_icon);
    toDos.appendChild(to_do_li);

    //saveData - object
    saveData_obj(to_do_input_text);
  }
}

function handleAddBtn() {
  const to_do_div = document.querySelector(".to_do_div");
  const to_do_submit = document.querySelector(".to_do_submit");

  to_do_div.classList.remove(IS_SHOWING);

  to_do_submit.addEventListener("click", handleAddToDos);
}

function loadData() {
  const str_user_data = localStorage.getItem(USER_INFO);

  if (str_user_data != null) {
    const obj_user_data = JSON.parse(str_user_data);
    const user_name = obj_user_data.name;

    const str_user_toDo = localStorage.getItem(user_name);
    if (str_user_toDo != null) {
      paint_toDos();
    } else {
      alert("to_do_listが空いてます。");
    }

    add_btn.addEventListener("click", handleAddBtn);
  } else {
  }
}

function init() {
  loadData();
}

init();
