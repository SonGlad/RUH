document.addEventListener('DOMContentLoaded', function() {
    const myList = document.querySelector('#main-content-list');


    const listItems = Array.from(myList.children); 
    
    function applyStyles() {
        if (window.innerWidth >= 1920) {
            if (listItems.length === 7 ){
                listItems[6].style.transform = "translate(295px, 0)";
            } 
            else{
                if(listItems.length === 9){
                    listItems[8].style.transform = "translate(575px, 0)";
                } 
                else{
                    if(listItems.length === 10){
                        listItems[8].style.transform = "translate(270px, 0)";
                        listItems[9].style.transform = "translate(270px, 0)";
                    }
                    else{
                        if(listItems.length === 16){
                            listItems[15].style.transform = "translate(295px, 0)";
                        }
                        else{
                            if(listItems.length === 18){
                                listItems[17].style.transform = "translate(295px, 0)";
                            }
                            else{
                                if(listItems.length === 20){
                                    listItems[19].style.transform = "translate(575px, 0)";
                                }
                                else{
                                    if(listItems.length === 21){
                                        listItems[19].style.transform = "translate(270px, 0)";
                                        listItems[20].style.transform = "translate(270px, 0)";
                                    }
                                } 
                            }
                        }
                    }
                }
            }
        }   
    }
    
    applyStyles();
    window.addEventListener('resize', applyStyles);
});
