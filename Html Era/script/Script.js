window.onscroll = () => slide()


function slide() {

let g = document.querySelector('nav');

if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20)
   g.style.top = '0'


}