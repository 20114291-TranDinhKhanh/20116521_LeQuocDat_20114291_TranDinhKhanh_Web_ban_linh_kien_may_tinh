export const KEY_STORAGE = "DAT_KEY_STORAGE";

export default config = JSON.parse(localStorage.getItem(KEY_STORAGE)) || [];

const setConfig = (value) => {
  localStorage.setItem(KEY_STORAGE, JSON.stringify([...config, value]));
};

export const getUser = (user) => {
  return config.find((item) => item.email === user.email);
};

export const existingUser = (user) => {
  if (getUser(user)) {
    alert("Email đã tồn tại!");
    return false;
  }
  return true;
};

export const addUser = (user) => {
  setConfig(user);
  alert("Đăng kí thành công!");
};
