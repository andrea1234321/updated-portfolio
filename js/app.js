let btnsEl = document.getElementsByClassName("btn");
let skillsEl = document.getElementsByClassName("skill-container");
let homeArrowEl= document.getElementById('home-arrow')

for (let i = 0; i < btnsEl.length; i++) {
  btnsEl[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    current[0].className = current[0].className.replace(" active", "")
    skillsEl[i].className += " active"
    this.className += " active"
  });
}

let offset= 250 
window.addEventListener("scroll", scrollToHomeScreen)
function scrollToHomeScreen(){
  if (window.scrollY> offset){
    homeArrowEl.classList.add("visible")
  }
  if (window.scrollY< offset){
    homeArrowEl.classList.remove("visible")
  }
}
