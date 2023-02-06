const accItems = document.querySelectorAll('.faq__item')

const openAccordion = (accordion) => {
    const content = accordion.querySelector(".faq__item-answer");
    accordion.classList.add("open");
    content.style.maxHeight = content.scrollHeight + "px";
};

const closeAccordion = (accordion) => {
    const content = accordion.querySelector(".faq__item-answer");
    accordion.classList.remove("open");
    content.style.maxHeight = null;
};

accItems.forEach((accordion) => {
    const intro = accordion.querySelector(".faq__item-question");
    const content = accordion.querySelector(".faq__item-answer");

    if(intro) {
        intro.addEventListener('click', function () {
            if (content.style.maxHeight) {
                closeAccordion(accordion);
            } else {
                accItems.forEach((accordion) => closeAccordion(accordion));
                openAccordion(accordion);
            }
        })
    }
});
