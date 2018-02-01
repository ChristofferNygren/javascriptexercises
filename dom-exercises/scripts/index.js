document.querySelector('button[type="submit"]').addEventListener('click', myLog);
document.querySelector('button[type="button"]').addEventListener('click', styleChange);
document.querySelector('button[name="anchorBtn"').addEventListener('click', anchorLog);

//logs value from input
function myLog() {
    console.log(document.querySelector('input[name="inputOne"]').value);
    console.log(document.querySelector('input[name="inputTwo"]').value);
}

//changes style
function styleChange() {
    document.querySelector("body>p").style.fontSize ="35px";
    document.querySelector("body>p").style.color ="red";
}

function anchorLog() {
    console.log(document.querySelector('a[target]').target);
    console.log(document.querySelector('a[hreflang]').hreflang);
    console.log(document.querySelector('a[href]').href);
    console.log(document.querySelector('a[id]').id);
}