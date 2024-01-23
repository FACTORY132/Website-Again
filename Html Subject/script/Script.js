window.onscroll = () => sli()
window.onload = () => console.log('World')

let i = document.querySelector('.img-content')
let o = document.querySelector('.vdo-content')
let j = document.querySelector('video')

function img() {
i.style.display = 'block'
o.style.display = 'none'
j.pause()
}

function vdo() {
i.style.display = 'none'
o.style.display = 'block'
j.play()


}

function sli() {

let k = document.querySelector('nav')

if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
  k.style.top = '0'
 }
}