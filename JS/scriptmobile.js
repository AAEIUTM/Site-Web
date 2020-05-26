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
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("fleche").src = "medias/images/fleche1.png"
        document.getElementById("contenu").className = "contenuouvert"
    } else {
        x.style.display = "none";
        document.getElementById("fleche").src = "medias/images/fleche.png"
        document.getElementById("contenu").className = "contenufermer"
    }

}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function affMenuHTML() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("fleche").src = "../medias/images/fleche1.png"
        document.getElementById("contenu").className = "contenuouvert"
    } else {
        x.style.display = "none";
        document.getElementById("fleche").src = "../medias/images/fleche.png"
        document.getElementById("contenu").className = "contenufermer"
    }
}


function affMenuHTMLinscr() {
    var x = document.getElementById("menu");
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("fleche").src = "../medias/images/fleche1.png"
    } else {
        x.style.display = "none";
        document.getElementById("fleche").src = "../medias/images/fleche.png"
    }

}