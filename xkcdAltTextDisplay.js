var title = document.getElementById("ctitle").textContent;
var comicContainer = document.getElementById("comic");
var comic = comicContainer.firstElementChild;

if (comic.nodeName.toLowerCase() !== "img") {
  // Sometimes the comic is wrapped in a anchor tag.
  comic = comic.firstElementChild;
}

var altText = comic.title;

var p = document.createElement("p");
p.id = "altText";
p.textContent = altText;
p.style.display = "block";
p.style.border = "1px solid black";
p.style.padding = "2px 10px";
p.style.background = "#FFF9BD";
p.style.fontVariant = "normal";
p.style.fontFamily = "XKCDFont, sans-serif";

var style = document.createElement("style");
style.appendChild(
  document.createTextNode(`
  @font-face {
    font-family: 'XKCDFont';
    src: url(${browser.runtime.getURL(
      "fonts/xkcd-Regular.otf"
    )}) format('opentype');
  }
`)
);
document.head.appendChild(style);

comicContainer.parentNode.insertBefore(p, comicContainer.nextSibling);
