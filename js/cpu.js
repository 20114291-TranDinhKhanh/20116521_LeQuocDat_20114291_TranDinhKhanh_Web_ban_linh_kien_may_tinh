const data = [
  {
    title: "Core i7 10700",
    price: 20000,
    image: "cpu1.png",
  },
  {
    title: "Core i5 10500T",
    price: 10000,
    image: "cpu2.png",
  },
  {
    title: "RYZEN 3 Pro 4350G",
    price: 15000,
    image: "cpu3.png",
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
