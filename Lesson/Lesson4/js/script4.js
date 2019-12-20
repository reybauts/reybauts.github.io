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
