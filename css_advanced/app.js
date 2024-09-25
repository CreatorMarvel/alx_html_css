const humbergBtnElement = document.querySelector(".humburg-menu");
const navElement = document.querySelector("header nav.menu");
const canceBtnElement = document.querySelector(".cancel");

humbergBtnElement.addEventListener("click", (e) => {
	navElement.classList.add("nav-open");
	canceBtnElement.style.display = "block";
	humbergBtnElement.style.display = "none";
	e.preventDefault();
});

canceBtnElement.addEventListener("click", (e) => {
	navElement.classList.remove("nav-open");
	canceBtnElement.style.display = "none";
});
