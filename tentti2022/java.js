let bikeCountID = "fillarit";
window.onload = function() {
    document.getElementById("infoteksti").style.display = "none";
}
function infoTeksti() {
    var info = document.getElementById("infoteksti");
    if (info.style.display == "none")
    {
        info.style.display = "block";
    }
    else
    {
        info.style.display = "none";
    }
}
function increment() {
    let val = parseInt(document.getElementById(bikeCountID).value) + 1;
    document.getElementById(bikeCountID).value = val;
    calcPrice();
}

function decrement() {
    let val = parseInt(document.getElementById(bikeCountID).value) - 1;
    if (val >= 0)
    {
        document.getElementById(bikeCountID).value = val;
    }
    calcPrice();
}
function calcPrice() {
    let bikeCount = parseInt(document.getElementById(bikeCountID).value);
    let service = document.getElementById("service").value;
    let serviceCost;

    switch(service)
    {
        case ("1"):
            serviceCost = 15;
            break;
        case ("2"):
            serviceCost = 30;
            break;

        case ("3"):
            serviceCost = 40;
            break;

        case ("4"):
            serviceCost = 60;
            break;

        default:
            serviceCost = 0;
            break;
    }

    const costElement = document.getElementById("cost");
    let cost = bikeCount * serviceCost;
    costElement.value = cost;
}
function resetValues()
{
    document.getElementById("cost").value = "0";
    document.getElementById("service").value = "0";
    document.getElementById("service").value = "0";
    document.getElementById(bikeCountID).value = "0";
}