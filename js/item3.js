const btn_add_item3 = document.getElementById("btn_add_item3");

const data = {
  title: "Pbtfans BOW",
  price: 17880000,
  image: "pbtfans.png",
};

const saveItemToLocalStorage = async (item) => {
  const items = (await JSON.parse(localStorage.getItem("items"))) ?? [];
  localStorage.setItem("items", JSON.stringify([...items, item]));
};

btn_add_item3.addEventListener("click", () => {
  saveItemToLocalStorage(data);
  console.log(data);
  alert("Thêm vào giỏ hàng thành công !");
});
