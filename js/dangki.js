const dangki_email = document.getElementById("dangki_email");
const dangki_pwd = document.getElementById("dangki_pwd");
const dangki_checkpwd = document.getElementById("dangki_checkpwd");
const dangki_username = document.getElementById("dangki_username");
const dangki_table = document.getElementById("dangki_table");

const er_dangki_username = document.getElementById("er_dangki_username");
const er_dangki_email = document.getElementById("er_dangki_email");
const er_dangki_pwd = document.getElementById("er_dangki_pwd");
const er_dangki_checkpwd = document.getElementById("er_dangki_checkpwd");

const btnDK = document.getElementById("btnDK");
let alertMessage = "";

const checkTen = () => {
  const regex = /^[A-Z]+[A-Za-z]*(\s[A-Z]+[A-Za-z]*)*$/;
  const value = dangki_username.value;
  if (value.trim() === "") {
    er_dangki_username.innerHTML = "(*)Hãy nhập tên!";
    er_dangki_username.classList.add("invalid");
    alertMessage = "Hãy nhập tên!";
    return false;
  } else if (regex.test(value) === false) {
    er_dangki_username.innerHTML = "(*)Chữ cái đầu phải bắt đầu bằng ký tự in hoa!!";
    er_dangki_username.classList.add("invalid");
    alertMessage = "Chữ cái đầu phải bắt đầu bằng ký tự in hoa!";
    return false;
  }
  er_dangki_username.innerHTML = "";
  return true;
};

const checkEmail = () => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const value = dangki_email.value;

  if (value.trim() === "") {
    er_dangki_email.innerHTML = "(*)Hãy nhập email!";
    er_dangki_email.classList.add("invalid");
    alertMessage = "(*)Hãy nhập email!";

    return false;
  } else if (regex.test(value) === false) {
    er_dangki_email.innerHTML = "(*)Email phải đúng định dạng!";
    er_dangki_email.classList.add("invalid");
    alertMessage = "Email phải đúng định dạng!";
    return false;
  }
  er_dangki_email.innerHTML = "";
  return true;
};

const checkPwd = () => {
  const pwdValue = dangki_pwd.value;
  if (pwdValue.trim() === "") {
    er_dangki_pwd.innerHTML = "(*)Hãy nhập mật khẩu!";
    er_dangki_pwd.classList.add("invalid");
    alertMessage = "(*)Hãy nhập mật khẩu!";

    return false;
  }
  er_dangki_pwd.innerHTML = "";
  return true;
};

const checkConfirmPwd = () => {
  const pwdValue = dangki_pwd.value;
  const checkPwdValue = dangki_checkpwd.value;
  if (pwdValue !== checkPwdValue) {
    er_dangki_checkpwd.innerHTML = "(*)Mật khẩu không khớp!";
    er_dangki_checkpwd.classList.add("invalid");
    alertMessage = "Mật khẩu không khớp!";
    return false;
  }
  er_dangki_checkpwd.innerHTML = "";
  return true;
};

const addRow = (user) => {
  let count = dangki_table.rows.length;
  const row = dangki_table.getElementsByTagName("tbody")[0].insertRow();

  const c0 = row.insertCell(0);
  const c1 = row.insertCell(1);
  const c2 = row.insertCell(2);
  const c3 = row.insertCell(3);

  c0.innerHTML = count;
  c1.innerHTML = user.username;
  c2.innerHTML = user.email;
  c3.innerHTML = user.pwd;
};

const data = () => {
  const username = dangki_username.value;
  const email = dangki_email.value;
  const pwd = dangki_pwd.value;

  const user = {
    username,
    email,
    pwd,
  };
  return user;
};

const saveLocalStorage = (user) => {
  console.log(user);
  const users = JSON.parse(localStorage.getItem("users")) ?? [];
  localStorage.setItem("users", JSON.stringify([...users, user]));
};

const getDataFromLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem("users")) ?? [];
  users.map((user) => {
    addRow(user);
  });
};

const dangki = (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!checkPwd() || !checkEmail() || !checkTen() || !checkConfirmPwd()) {
    return alert(alertMessage);
  }
  addRow(data());
  saveLocalStorage(data());
};

dangki_username.onblur = checkTen;
dangki_email.onblur = checkEmail;
dangki_pwd.onblur = checkPwd;
dangki_checkpwd.onblur = checkConfirmPwd;
btnDK.addEventListener("click", dangki);
getDataFromLocalStorage();
