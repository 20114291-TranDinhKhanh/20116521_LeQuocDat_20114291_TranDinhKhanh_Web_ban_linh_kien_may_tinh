const store = document.getElementById("store");

const getListItemLocalStorage = () => {
  const listItems = JSON.parse(localStorage.getItem("items")) || [];
  const html = listItems
    .map(
      (item) => `
            <div class="d-flex align-items-center shadow">
                <img src="../img/${item.image}" alt="item" class="item__img">
                <div class="flex-grow-1">
                    <h4>${item?.title}</h4>
                    <h4 class="text-secondary">${item.price}</h4>
                </div>
                <button class="btn btn-danger mx-3 btn--delete">Xóa</button>
            </div>
        `
    )
    .join("");

  store.innerHTML = `
    ${
      listItems.length > 0
        ? `
        <div id="store" class="container container__store">
            <h2 class="text-center text-capitalize my-3">gio hang cua ban</h2>
            <div class="row">
                <div class='col-9'>${html}</div>
                <div class="col-3 d-flex flex-column align-items-center position-sticky ">
                    <div class="my-4">Tổng: ${listItems.reduce((total, value) => total + value.price, 0)}</div>
                    <a href="../html/thanhtoan.html">
                        <button class="btn btn-primary text-right">Thanh toan</button>
                    </a>
                </div>
            </div>
         </div>
    `
        : `
        <a href="/"> Giỏ hàng bạn trống.Click vào đây và tiếp tục mua sắm</a>
    `
    }
  `;
};

getListItemLocalStorage();

store.addEventListener("click", (event) => {
  if (event.target.classList.contains("btn--delete")) {
    const listItems = JSON.parse(localStorage.getItem("items")) || [];
    const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
    listItems.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(listItems));
    getListItemLocalStorage();
  }
});
