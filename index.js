
// window.addEventListener("scroll", function() {
//   var header = document.querySelector("nav");
//   header.classList.toggle("sticky", window.scrollY === 0);
// });
window.addEventListener("scroll", function() {
  var navbar = document.querySelector("nav");

  if (window.scrollY > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

