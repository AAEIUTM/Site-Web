function affProfile() {
    var x = document.getElementById("textCo");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function affMenu() {
    var x = document.getElementById("menu");
    var element = document.getElementById("contenu");
    if (x.style.display === "none") {
        x.style.display = "block";

        element.classList.toggle("menufermer");
    }
} else {
    x.style.display = "none";
}
}