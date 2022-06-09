const btns = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".content");
const about = document.querySelector(".about");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  console.log(id);
  if (id) {
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  contents.forEach(function (content) {
    content.classList.remove("active");
  });
  let element = document.getElementById(id);
  element.classList.add("active");
});
