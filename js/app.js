let btnsEl = document.getElementsByClassName("btn");
let skillsEl = document.getElementsByClassName("skill-container");
console.log("skillsEl", skillsEl)
console.log("btnsEl", btnsEl)
for (let i = 0; i < btnsEl.length; i++) {
  btnsEl[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active")
    console.log("current:", current)
    console.log("skillsEl[i]:", skillsEl[i])
    current[0].className = current[0].className.replace(" active", "")
    current[0].className = current[0].className.replace(" active", "")
    skillsEl[i].className += " active"
    this.className += " active"
  });
}

