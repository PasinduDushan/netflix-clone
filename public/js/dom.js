const ham = document.getElementById("luxbar-hamburger")
const avatar = document.getElementById("nav-img")
let i = 2

ham.addEventListener('click', ()=>{
  if(i % 2 == 0){
    avatar.style.display = "block";
  } else{
    avatar.style.display = "none";
  }
  i++
})
