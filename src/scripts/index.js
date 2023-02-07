function copyText() {
    let copyText = document.querySelector(".token-address__address-text").innerHTML;

    navigator.clipboard.writeText(copyText);
}

let copyBtn = document.querySelector('.token-address__btn')

if(copyBtn) {
    copyBtn.addEventListener('click', copyText)
}