document.addEventListener('DOMContentLoaded', function() {
    const myList = document.querySelector('#main-content-list');

    
    const listItems = Array.from(myList.children); 
    const lastIndex = listItems.length - 1;
    
    function applyStyles() {
        if (window.innerWidth >= 390 && window.innerWidth <= 767) {
            if (lastIndex % 2 === 0) {
                const lastItem = listItems[lastIndex];
                lastItem.style.transform = "translate(176px, 0)";
            }
        } 
    }

    applyStyles();
    window.addEventListener('resize', applyStyles);
});


