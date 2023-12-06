import { dataList, saleList, backGroundImg } from "./data.js"

const bar = document.getElementById("bar")
const nav = document.getElementById("navbar")
const close = document.getElementById("close")
const section = document.getElementById('feature')
const proContainer = document.querySelector('.pro-container')
const pageHeader = document.querySelector('#page-header')


let intervalId = setInterval(function () {
  const random = Math.floor(Math.random()* dataList.length)
  const promote = `<div class="fe-box">
     <img src="${dataList[random].image}" alt="">
     <h6>${dataList[random].title}</h6>
   </div> `
   section.innerHTML += promote
}, 2000)

setTimeout(function() {
  clearInterval(intervalId)
}, 13000)


 setInterval(function () {
   const random = Math.floor(Math.random() * backGroundImg.length)
   pageHeader.style.background = `url(${backGroundImg[random]})`
   pageHeader.style.backgroundPosition = 'center'
   pageHeader.style.backgroundSize = 'cover'
   pageHeader.style.backgroundRepeat = 'no-repeat'
 }, 1000)


saleList.forEach((sale) => {
  const items = `<div class="pro">
  <img src="${sale.img}" alt="">
  <div class="des">
    <span>${sale.brand}</span>
    <h5>${sale.name}</h5>
    <div class="star">
     <p>${sale.features.fuel}</p>
     <p>${sale.features.seat}</p>

    </div>
    <h4>Ksh${sale.price}</h4>
  </div>
  <a href="http://Wa.me/+254723266027"><i class='bx bxl-whatsapp'></i></a>
</div>`

proContainer.innerHTML += items
})

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
} 
if(close){
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}



