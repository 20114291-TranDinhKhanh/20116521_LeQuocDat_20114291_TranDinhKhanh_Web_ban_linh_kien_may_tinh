const btn_add_item1 = document.getElementById("btn_add_item1");
const title_item1 = document.getElementById("title_item1");
const price_item1 = document.getElementById("price_item1");

console.log(btn_add_item1);
const data = () => {
  const title = title_item1.innerText;
  const price = price_item1.innerText;
  const item = {
    title,
    price,
  };
  return item;
};
const saveItemToLocalStorage = (item) => {
  const items = JSON.parse(localStorage.getItem("items")) ?? [];
  localStorage.setItem("items", JSON.stringify([...items, item]));
};

btn_add_item1.addEventListener("click", () => {
  saveItemToLocalStorage(data());
  alert("Thêm thành công !");
});
