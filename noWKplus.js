console.log("noWKplus.js loaded");
fetch(window.location.href)
.then(response => response.text())
.then(data => {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(data, 'text/html');
    let newarticle = htmlDoc.getElementsByTagName("article")[0];
    let newText = newarticle.querySelector(".article-content");
    let oldArticle = document.getElementsByTagName("article")[0];
    let oldText = oldArticle.querySelector(".article-content");
    oldText.innerHTML = "";
    oldText.innerHTML = newText.innerHTML
})