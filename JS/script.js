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
<<<<<<< HEAD
    } else {
        x.style.display = "none";
    }
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
=======

        element.classList.toggle("menufermer");
    }
} else {
    x.style.display = "none";
}
>>>>>>> e6f7734e229c2fa6ca77aeebd2182cdc53e545eb
}