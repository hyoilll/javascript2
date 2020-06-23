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

function saveData_obj(item) {
  to_do_list_obj.push(item);

  //savelocalstorage
  saveData_localStorage();
}

function handleDelBtn(event) {
  const target = event.target;
  const li = target.parentNode.parentNode;
  toDos.removeChild(li);

  // to_do_list_obj = to_do_list_obj.filter(function (li_className)
  // {
  //   return to_do_list_obj
  // });

  for (let i = 0; i <= to_do_list_obj.length; ++i) {
    if (to_do_list_obj[i].id == li.className) {
      to_do_list_obj.splice(i, 1);
    }
  }

  saveData_localStorage();
}

function paint_toDos() {
  const user_name = JSON.parse(localStorage.getItem(USER_INFO)).name;

  const user_to_do_list = JSON.parse(localStorage.getItem(user_name));

  for (let i = 0; i < user_to_do_list.length; ++i) {
    const to_do_li = document.createElement("li");
    const to_do_list_span = document.createElement("span");
    const to_do_del_span = document.createElement("span");
    const to_do_del_icon = document.createElement("i");

    to_do_del_icon.addEventListener("click", handleDelBtn);

    to_do_del_span.className = "icon";
    to_do_del_icon.className = "fas fa-minus-square";

    const toDo_content = user_to_do_list[i].content;
    to_do_li.className = user_to_do_list[i].id;

    to_do_list_span.innerText = toDo_content;

    to_do_del_span.appendChild(to_do_del_icon);
    to_do_li.appendChild(to_do_list_span);
    to_do_li.appendChild(to_do_del_span);
    toDos.appendChild(to_do_li);

    const list_number = to_do_list_obj.length + 1;

    const item = {
      content: toDo_content,
      id: list_number,
    };

    saveData_obj(item);
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
    const to_do_list_span = document.createElement("span");
    const to_do_del_span = document.createElement("span");
    const to_do_del_icon = document.createElement("i");

    to_do_del_icon.addEventListener("click", handleDelBtn);

    to_do_del_span.className = "icon";
    to_do_del_icon.className = "fas fa-minus-square";

    to_do_list_span.innerText = to_do_input_text;
    to_do_li.className = to_do_list_obj.length + 1;

    to_do_del_span.appendChild(to_do_del_icon);
    to_do_li.appendChild(to_do_list_span);
    to_do_li.appendChild(to_do_del_span);
    toDos.appendChild(to_do_li);

    const list_number = to_do_list_obj.length + 1;

    const item = {
      content: to_do_input_text,
      id: list_number,
    };

    //saveData - object
    saveData_obj(item);
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
    // if (str_user_toDo != null) {
    // } else {
    // }

    if (str_user_toDo == null) {
      alert("to_do_listが空いてます。");
    } else {
      paint_toDos();
    }
    add_btn.addEventListener("click", handleAddBtn);
  } else {
  }
}

function init() {
  loadData();
}

init();
