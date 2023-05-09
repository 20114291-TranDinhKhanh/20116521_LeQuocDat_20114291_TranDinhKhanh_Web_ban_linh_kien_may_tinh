const data = [
  {
    title: "G.SKILL Trident Z RGB 16GB",
    price: 4000000,
    image: "ram1.webp",
  },
  {
    title: "ADATA XPG LANCER RGB 64GB",
    price: 4500000,
    image: "ram2.webp",
  },
  {
    title: "Corsair Vengeance RGB RS 32GB",
    price: 5000000,
    image: "ram3.webp",
  },
];

const container = document.querySelector("#container");
container.innerHTML = data
  .map((item) => {
    return `
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img class="card-img-top" width="100" height="320" src="../img/${item.image}" />
          <div class="card-body">
            <div class="d-flex justify-content-between align-items-center">
              <h5>${item.title}</h5>
              <small class="text-muted">${item.price}</small>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">Xem thêm</button>
                <button type="button" class="btn btn-sm btn-outline-info btn--add" data-item='${JSON.stringify(
                  item
                )}'>Chọn mua</button>
              </div>
              <small class="text-muted">Còn hàng</small>
            </div>
          </div>
        </div>
      </div>
    `;
  })
  .join("");

const listBtnAdd = document.querySelectorAll(".btn--add");

let saveLocalStorage = (item) => {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  localStorage.setItem("items", JSON.stringify([...items, item]));
};

listBtnAdd.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const item = JSON.parse(event.currentTarget.dataset.item);
    console.log(item);
    saveLocalStorage(item);
    alert("Đã thêm vào giỏ hàng");
  });
});
