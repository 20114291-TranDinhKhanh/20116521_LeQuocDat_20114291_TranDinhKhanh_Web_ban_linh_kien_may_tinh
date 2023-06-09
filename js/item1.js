const btn_add_item1 = document.getElementById("btn_add_item1");

const data = {
  title: "RE65",
  price: "4488000",
  image: "re65.png",
};

const saveItemToLocalStorage = async (item) => {
  const items = (await JSON.parse(localStorage.getItem("items"))) ?? [];
  localStorage.setItem("items", JSON.stringify([...items, item]));
};

btn_add_item1.addEventListener("click", () => {
  saveItemToLocalStorage(data);
  console.log(data);
  alert("Thêm vào giỏ hàng thành công !");
});
