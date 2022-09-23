function ageCheckConfirm() {
    // Show main body again
    let bodyElem = document.querySelector("div#page_content_body");
    bodyElem.style.display = 'block';

    let ageCheckElem = document.querySelector("div#age_check_loaded");
    ageCheckElem.style.display = 'none';

    // Remember age confirmation
    document.cookie = "over18=true; path=/";
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// Check for web crawlers
if (
    !navigator.userAgent.includes("Googlebot")
    && !navigator.userAgent.includes("Bingbot")
    && !navigator.userAgent.includes("DuckDuckBot")
    && !navigator.userAgent.includes("archive.org_bot")
) {
    if (getCookie("over18") !== "true") {
        fetch('age-check.html')
            .then(res => res.text())
            .then(text => {
                let oldElem = document.querySelector("script#age_check_preload");
                let newElem = document.createElement("div");
                newElem.innerHTML = text;
                oldElem.parentNode.replaceChild(newElem, oldElem);

                // Hide main body
                let bodyElem = document.querySelector("div#page_content_body");
                bodyElem.style.display = 'none';
            })
    }
}