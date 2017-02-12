var foundhotel = document.querySelector(".page-content-index-form-btn-open-closed");
var popup = document.querySelector(".page-content-index-appointment-form");
foundhotel.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("page-content-index-appointment-form-close");
  console.log("Клик по ссылке вход");
});
