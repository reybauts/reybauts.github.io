function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function initial() {
	modspan.innerHTML = document.lastModified;
	var currentYear = new Date();
	yearspan.innerHTML = currentYear.getFullYear();
}
  
window.onload = initial;