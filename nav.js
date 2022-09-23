fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldElem = document.querySelector("script#replace_with_navbar");
    let newElem = document.createElement("div");
    newElem.innerHTML = text;
    oldElem.parentNode.replaceChild(newElem, oldElem);
})
