const headerOpenModalBtn = document.querySelector('#header-open-modal-btn');
const modalBackdrop = document.querySelector('#modal');
const modalCloseBtn = document.querySelector('#modal-close-btn');


headerOpenModalBtn.addEventListener('click', () => {
    modalBackdrop.classList.remove('is-hidden');
    disableScroll();
});

modalCloseBtn.addEventListener('click', () =>{
    modalBackdrop.classList.add('is-hidden');
    enableScroll();
});



function disableScroll() {
    document.body.classList.add('scroll-lock');
};
  
function enableScroll() {
    document.body.classList.remove('scroll-lock');
};

