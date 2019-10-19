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


function UpdateDates()
{
    GetCurrentYear();
    GetCurrentDate();
}


function show_pancakes_msg (){
    var d = new Date();
    var message = document.getElementsByClassName("pancakes")[0];
    if (d.getDay() == 5){
    message.style.display = "block";
    }
    else {
    message.style.display = "none";
    }
}


