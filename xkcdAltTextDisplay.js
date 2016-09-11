var title = document.getElementById("ctitle").textContent;
var comicContainer = document.getElementById("comic");
var comic = comicContainer.firstElementChild;
var altText = comic.title;

var titleHolder = document.createElement("div");
titleHolder.id = "titleHolder";

var h1 = document.createElement("h1");
h1.id = "title";
h1.textContent = title;
h1.style.letterSpacing = "-0.05em";
h1.style.display = "inline";
h1.style.fontSize = "1.75em";

var sup = document.createElement("sup");
sup.id = "altTextLink";
sup.textContent = "(alt-text)";
sup.style.postion = "absolute";
sup.style.overflow = "visible";
sup.style.fontVariant = "normal";
sup.style.position = "absolute";

sup.onclick = function () {
    var p = document.getElementById("altText");
    console.log(p.style.display);
    if (p.style.display == "block") {
        p.style.display = "none";
    } else {
        p.style.display = "block";
    }
};

var p = document.createElement("p");
p.id = "altText";
p.textContent = altText;
p.style.display = "none";
p.style.border = "1px solid black";
p.style.padding = "2px 10px";
p.style.background = "#FFF9BD";
p.style.fontVariant = "normal";

comicContainer.parentNode.insertBefore(p, comicContainer.nextSibling);
comicContainer.parentNode.insertBefore(sup, comicContainer.nextSibling);
comicContainer.parentNode.insertBefore(h1, comicContainer.nextSibling);
comicContainer.parentNode.insertBefore(titleHolder, comicContainer.nextSibling);
