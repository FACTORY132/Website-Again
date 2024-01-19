window.onscroll = () => slide();

const slideAt = (value) =>
  document.documentElement.scrollTop > value || document.body.scrollTop > value;


function slide() {
  let g = document.querySelector("nav");
  let m = document.querySelector(".text-content");
  let k = document.querySelector(".img-content");
  if (slideAt(20)) g.style.top = "0";

  if (slideAt(400)) {
    m.style.left = "16rem";
    m.style.opacity = "1";
    k.style.left = "2.5%";
    k.style.rotate = "0deg";
  }
}
