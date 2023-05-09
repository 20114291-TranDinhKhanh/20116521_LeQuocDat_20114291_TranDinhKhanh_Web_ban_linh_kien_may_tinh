function kiemtraho() {
  var regname = /^[A-Z]+[A-Za-z]*(\s[A-Z]+[A-Za-z]*)*$/;
  var ten = document.getElementById("firstName").value;
  if (regname.test(ten) == false) {
    document.getElementById("er1").innerHTML = "(*)Phải bắt đầu bằng ký tự in hoa!!";
  } else {
    document.getElementById("er1").innerHTML = "";
  }
}

function kiemtraten() {
  var regname = /^[A-Z]+[A-Za-z]*(\s[A-Z]+[A-Za-z]*)*$/;

  var ten = document.getElementById("lastName").value;

  if (regname.test(ten) == false) {
    document.getElementById("er2").innerHTML = "(*)Phải bắt đầu bằng ký tự in hoa!!";
  } else {
    document.getElementById("er2").innerHTML = "";
  }
}

function kiemtracard() {
  var regc = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}$/;
  var card = document.getElementById("cc-number").value;
  if (regc.test(card) == false) {
    document.getElementById("er3").innerHTML = "(*)Mã số thẻ sai!!!";
    return false;
  } else {
    document.getElementById("er3").innerHTML = "";
    return true;
  }
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
