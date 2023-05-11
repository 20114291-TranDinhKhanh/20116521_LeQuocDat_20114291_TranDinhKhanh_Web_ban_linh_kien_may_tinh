const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// header
let header = $("#header");
let getUser = async () => {
  let user = await JSON.parse(localStorage.getItem("user"));

  header.innerHTML = `
    <header class="header bg-dark text-white ">
            <div class="container py-2">
                <div class="row">
                    
                    <div class="col-4 ">
                        <nav class="navbar-expand d-flex justify-content-end">
                            <ul class="navbar-nav">
                                ${
                                  user?.email
                                    ? `<li class="text-nowrap my-auto mr-2">${user.email}</li>
                                    <li class="nav-item text-nowrap">
                                    <button id="dangxuat" class="btn btn-secondary btn-lg btn-block">Đăng xuất</button>
                                  </li>
                                    `
                                    : `<li class="text-nowrap">
                                    <a class="nav-link nav__header" href="https://20114291-trandinhkhanh.github.io/20116521_LeQuocDat_20114291_TranDinhKhanh_Web_ban_linh_kien_may_tinh/html/dangnhap.html">
                                      Đăng nhập
                                    </a>
                                  </li>
                                  <li class="nav-item text-nowrap">
                                  <a class="nav-link nav__header" href="https://20114291-trandinhkhanh.github.io/20116521_LeQuocDat_20114291_TranDinhKhanh_Web_ban_linh_kien_may_tinh/html/dangki.html">
                                      Đăng kí
                                    </a>
                                  </li>`
                                }
                                <li class="nav-item text-nowrap">
                                    <a class="nav-link  icon__cart" href="https://20114291-trandinhkhanh.github.io/20116521_LeQuocDat_20114291_TranDinhKhanh_Web_ban_linh_kien_may_tinh/html/store.html">
                                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cart4" fill="grey" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                      </svg>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    `;

  if (user?.email) {
    let dangxuat = $("#dangxuat");
    dangxuat.onclick = () => {
      localStorage.removeItem("user");
      window.location.reload();
    };
  }
};
getUser();

// window scroll header
window.onscroll = function () {
  let header = $("#header");
  if (window.pageYOffset > 50) {
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
    header.style.padding = "0";
    header.style.zIndex = "50";
  } else {
    header.style.position = "relative";
  }
};

// footer
const footer = $("#footer");
footer.innerHTML = `
  <footer class="mt-md-12 bg-dark text-white">
          <div class="container py-5">
              <div class="row ">
                  <div class="col-md-2" style="left: 1rem;">
                      <h5>@DK Studio</h5>
                  </div>
                  <div class="col-md-4" style="left: 42rem;">
                      <h5>Thông tin liên lạc</h5>
                      <ul class="list-unstyled text-small">
                          <li>Nhân Viên 1: Trần Đình Khánh</li>
                          <li>Nhân viên 2: Lê Quốc Đạt</li>
                          <li>SĐT: 0909897049</li>
                          <li>SĐT: 0994535130</li>
                          <li>Email:DKstudio@gmail.com</li>
                          <li>Email:lqdat87@gmail.com</li>
                      </ul>
                  </div>
                  <div class="col-md-2" style="left: 12rem;">
                      <h5>Liên kết</h5>
                      <ul class=" list-unstyled text-small">
                          <a href="#" class="text-white">Discord</a>
                          <br>
                          <a href="#" class="text-white">Facebook</a>
                          <br>
                          <a href="#" class="text-white">Zalo</a>
                          <br>
                          <a href="#" class="text-white">Gmail</a>
                      </ul>
                  </div>
              </div>
          </div>
      </footer>
  `;
