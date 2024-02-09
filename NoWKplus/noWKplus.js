async function removeWKpaywall() {
    console.log("noWKplus.js loaded");
    await fetch(window.location.href)
    .then(response => response.text())
    .then(data => {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(data, 'text/html');
        let newarticle = htmlDoc.getElementsByTagName("article")[0];
        let newText = newarticle.querySelector(".article-content");
        let oldArticle = document.getElementsByTagName("article")[0];
        let oldText = oldArticle.querySelector(".article-content");
        if (newText == null || oldText == null) {
            return;
        }
        oldText.innerHTML = "";
        oldText.innerHTML = newText.innerHTML
    })    
}

//run the function after 1 second
setTimeout(removeWKpaywall, 500);