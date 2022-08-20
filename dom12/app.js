let form = document.getElementById("form");

let email = "laiquangduy@gmail.com";
let password = "123456";

console.log(form);

//Lấy giá trị của ô input thông qua name
console.log(form.email.value);
console.log(form.password.value);

// //submit event
// form.onsubmit = function(event) {
//     event.preventDefault();
//     // logic

// };

//exercise:
//Tiến hành validate form
//khi người dùng không nhập vào email -> Hiển thị trên DOM một dòng text đỏ
//"Email không được bỏ trống"
//"Password không được bỏ trống"

//Khi người dùng nhập vào email và password đầy đủ, tiến hành kiểm tra
//với biến email và biến password đặt sẵn trong file Js
//Nếu sai email --> Hiển thị ra text đỏ trong DOM "sai email"
//Nếu sai password --> Hiển thị ra text đỏ trong DOM "sai password"

//Nếu đúng cả 2 ----> Clear hết text đỏ và hiển thi text xanh "Đăng nhập thành công"
let error = document.getElementById("er-email");
console.log(document.getElementById("er-email"));
let error1 = document.getElementById("er-password");
let success = document.getElementById("success");

form.onsubmit = function (event) {
  event.preventDefault();
  // logic
  if (form.email.value == "") {
    error.innerHTML = "Email không được bỏ trống";
  }
  if (form.password.value == "") {
    error1.innerHTML = "Password không được bỏ trống";
  } else if (form.email.value !== email) {
    error.innerHTML = "Sai tài khoản";
    error1.innerHTML = "";
  } else if (form.password.value !== password) {
    error1.innerHTML = "Sai mật khẩu";
    error.innerHTML = "";
  } else {
    error.remove();
    error1.remove();
    success.innerHTML = "Đăng nhập thành công";
  }
};

let i = prompt();
