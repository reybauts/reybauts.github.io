function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
function initial() {
	var d = new Date();	 
	document.getElementById("date").innerHTML = d.toDateString();
	var currentYear = new Date();
	yearspan.innerHTML = currentYear.getFullYear();
}
window.onload = initial;

$(document).ready(function () {
	var d = new Date();
    var dayOfWeek = d.getDay();
    
    // If it is Friday show banner
    if (dayOfWeek === 5) {
        $('.banner').show();
    }
});
