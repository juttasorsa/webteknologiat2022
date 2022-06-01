function search()
{
    var katu = document.getElementById("katu").value.replace(" ", "");
    var kaupunki = document.getElementById("kaupunki").value;

    document.getElementById("kartta").setAttribute("src", "https://www.google.com/maps?q=" + katu + kaupunki + "&output=embed");
}