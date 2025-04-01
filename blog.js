var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Script para el acordeón
var acc = document.getElementsByClassName("accordion");
var j;

for (j = 0; j < acc.length; j++) {
    acc[j].addEventListener("click", function() {
        // Cerrar todos los paneles primero
        for (var k = 0; k < acc.length; k++) {
            if (acc[k] !== this) {
                acc[k].classList.remove("active");
                acc[k].nextElementSibling.style.maxHeight = null;
            }
        }
        
        // Abrir o cerrar el panel actual
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}