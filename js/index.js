var nav = document.getElementById("navId");

var navAnchor = document.querySelector("nav .nav-item a.first");
console.log(navAnchor);

// window.addEventListener("scroll", function () {
//   nav.style.cssText = `
//         background-color: var(--main-color);
//         `;
// });
window.addEventListener("scrollend", function () {
  if (window.scrollY < 550) {
    nav.style.cssText = `
       background-color: #050e17 ;
        `;
  } else if (window.scrollY > 550) {
    nav.style.cssText = `
        background-color: var(--main-color);
        `;
  }
});

// nav.addEventListener("click", function () {
//   nav.style.cssText = `
//     background-color: var(--main-color);
//     `;
// });
// nav.addEventListener("mouseleave",function(){
//     nav.style.cssText=
//     `
//     background-color:transparent;
//     `
// })
