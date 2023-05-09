const dangnhap_email = document.getElementById("dangnhap_email");
const dangnhap_pwd = document.getElementById("dangnhap_pwd");
const dangnhap_back = document.getElementById("dangnhap_back");

const er_dangnhap_email = document.getElementById("er_dangnhap_email");
const btnDN = document.getElementById("btnDN");
let alertMessage = "";

const checkEmail = () => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const value = dangnhap_email.value;

  if (value.trim() === "") {
    er_dangnhap_email.innerHTML = "(*)Hãy nhập email!";
    er_dangnhap_email.classList.add("invalid");
    alertMessage = "(*)Hãy nhập email!";

    return false;
  } else if (regex.test(value) === false) {
    er_dangnhap_email.innerHTML = "(*)Email phải đúng định dạng!";
    er_dangnhap_email.classList.add("invalid");
    alertMessage = "Email phải đúng định dạng!";
    return false;
  }
  er_dangnhap_email.innerHTML = "";
  return true;
};

const checkPwd = () => {
  const pwdValue = dangnhap_pwd.value;
  if (pwdValue.trim() === "") {
    er_dangnhap_pwd.innerHTML = "(*)Hãy nhập mật khẩu!";
    er_dangnhap_pwd.classList.add("invalid");
    alertMessage = "(*)Hãy nhập mật khẩu!";

    return false;
  }
  er_dangnhap_pwd.innerHTML = "";
  return true;
};

const saveLocalStorage = (user) => {
  console.log(user);
  const users = JSON.parse(localStorage.getItem("user")) ?? [];
  localStorage.setItem("user", JSON.stringify(user));
};

const getDataFromLocalStorage = () => {
  const users = JSON.parse(localStorage.getItem("users")) ?? [];
  return users.find((user) => user.email === dangnhap_email.value && user.pwd === dangnhap_pwd.value);
};

const dangnhap = (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (!checkPwd() || !checkEmail()) {
    return alert(alertMessage);
  }
  if (!!getDataFromLocalStorage() === false) {
    return alert("Email hoặc mật khẩu không đúng!");
  }
  saveLocalStorage(getDataFromLocalStorage());
  alert("Đăng nhập thành công !");
  return dangnhap_back.click();
};

dangnhap_email.onblur = checkEmail;
dangnhap_pwd.onblur = checkPwd;
btnDN.addEventListener("click", dangnhap);
