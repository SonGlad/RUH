const accordeonList = document.querySelector('#hero-accordeon-list');
const accordeonItems = Array.from(accordeonList.children);

accordeonItems[0].classList.add('hero-accordeon-item-active');
accordeonItems[0].querySelector('.js-accordeon-title').classList.add('accordeon-title-active');
accordeonItems[0].querySelector('.js-accordeon-element').classList.add('accordeon-visible');

// document.addEventListener('click', (event) => {
//   if (!event.target.closest('#hero-accordeon-list')) {
//     closeAllAccordeonItems();
//   }
// });

accordeonItems.forEach(item => {
    const accordeonTitle = item.querySelector(".js-accordeon-title");
    const accordeonElement = item.querySelector(".js-accordeon-element");

    accordeonTitle.addEventListener('click', () => {
        if (!item.classList.contains('hero-accordeon-item-active')) {
          closeAllAccordeonItems();
        }
        accordeonElement.classList.add('accordeon-visible');
        accordeonTitle.classList.add('accordeon-title-active');
        item.classList.add('hero-accordeon-item-active');
    });
});

function closeAllAccordeonItems() {
    accordeonItems.forEach(item => {
        const accordeonTitle = item.querySelector(".js-accordeon-title");
        const accordeonElement = item.querySelector(".js-accordeon-element");
        accordeonElement.classList.remove('accordeon-visible');
        accordeonTitle.classList.remove('accordeon-title-active');
        item.classList.remove('hero-accordeon-item-active');
    });
};


