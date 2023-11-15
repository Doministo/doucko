const obrazek_1 = "https://www.kutilovo.cz/shop/images/1777.jpg";
const obrazek_2 = "https://www.kutilovo.cz/shop/watermark.php?sh=2&file=images/1777a.jpg";
const obrazek_3 = "https://www.kutilovo.cz/shop/watermark.php?sh=2&file=images/1777c.jpg";

function obr1() {
    let img_a = document.getElementById("img_html"); //tím, že za ("img_html") není ".xxxx" můžu ten sufix dávat později v kódu
    
    if(img_a.src != obrazek_1) {
        img_a.src = obrazek_1;
    } else {
        alert("Obrázek už tam je!")
    }
}

function obr2() {
    let img_a = document.getElementById("img_html");
    
    if(img_a.src != obrazek_2) {
        img_a.src = obrazek_2;
    } else {
        alert("Obrázek už tam je!")
    }
}

function obr3() {
    let img_a = document.getElementById("img_html");
    
    if(img_a.src != obrazek_3) {
        img_a.src = obrazek_3;
    } else {
        alert("Obrázek už tam je!")
    }
}

function zmena() {
    let img_a = document.getElementById("img_html");

    if(img_a.src == obrazek_1) {
        img_a.src = obrazek_2
    } else if(img_a.src == obrazek_2) {
        img_a.src = obrazek_3
    } else if(img_a.src == obrazek_3) {
        img_a.src = obrazek_1
    }
}

function vyhledej() {
    let inp = document.getElementById("zmen_html").value;

    if(inp == "obrazek 1") {
        obr1();
    }
    else if(inp == "obrazek 2") {
        obr2();
    }
    else if(inp == "obrazek 3") {
        obr3();
    }
    else {
        alert("Jsi kretén.")
    }
}
