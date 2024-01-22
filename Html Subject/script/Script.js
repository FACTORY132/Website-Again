window.onscroll = () => sli()


function sli() {

let k = document.querySelector('nav')

if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
  k.style.top = '0'
 }
else {
  k.style.top = '-250px'
 }
}