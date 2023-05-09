const data = [
  {
    title: "Palit 3060ti",
    price: 10000000,
    image: "vga1.jpg",
  },
  {
    title: "MSI 4070ti",
    price: 21000000,
    image: "vga2.jpg",
  },
  {
    title: "AERO 4070ti",
    price: 23000000,
    image: "vga3.jpg",
  },
  {
    title: "Aorus 4070ti",
    price: 21000000,
    image: "vga4.jpg",
  },
  {
    title: "Igame 4070ti",
    price: 20000000,
    image: "vga5.jpg",
  },
  {
    title: "Asus 4070",
    price: 18000000,
    image: "vga6.jpg",
  },
];

const vga__container = document.querySelector("#vga__container");
vga__container.innerHTML = data
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

const vga__listBtnAdd = document.querySelectorAll(".btn--add");

let saveLocalStorage = (item) => {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  localStorage.setItem("items", JSON.stringify([...items, item]));
};

vga__listBtnAdd.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const item = JSON.parse(event.currentTarget.dataset.item);
    console.log(item);
    saveLocalStorage(item);
    alert("Đã thêm vào giỏ hàng");
  });
});
