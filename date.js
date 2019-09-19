function yearNow()
{
    var date = new Date();
    var currentYear = date.getFullYear();
    document.getElementById("copyYear").innerHTML = currentYear;
}

function lastUpdate()
{
    var modifiedDate = document.lastModified;
    document.getElementById("datemod").innerHTML = modifiedDate;
}

function UpdateDates()
{
    yearNow();
    lastUpdate();
}