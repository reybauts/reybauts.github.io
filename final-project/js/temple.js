{
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("open");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
}

{
var today = new Date()
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("currentdate").innerHTML= (day[today.getDay()] + ", " + today.getDate() + " " + month[today.getMonth()] + " " + today.getFullYear());
}

{
function toggleMenu() {
document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
}
