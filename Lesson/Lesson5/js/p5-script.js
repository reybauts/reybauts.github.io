function UpdateDates() {
	GetCurrentYear();
	GetCurrentDate();
}

$(document).ready(function () {
	var d = new Date();
	var dayOfWeek = d.getDay();

	if (dayOfWeek === 5) {
		$('.pancakeFriday').show();
	}
});

function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function GetCurrentYear() {
	var date = new Date();
	var currentYear = date.getFullYear();
	document.getElementById("copyrightDate").innerHTML = currentYear;
}

function GetCurrentDate() {	
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var today = new Date();
	var dd = today.getDate();
	var mm = monthNames[today.getMonth()];
	var yyyy = today.getFullYear();
	var day = days[today.getDay()];
	today = day + ', ' + dd + ' ' + mm + ' ' + yyyy;
	document.getElementById("currentDate").innerHTML = today;
}

/*function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}*/