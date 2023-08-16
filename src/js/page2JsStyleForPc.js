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



// ДИНАМИЧЕСКИЙ РАСЧЕТ ШИРИНЫ   



document.addEventListener('DOMContentLoaded', function() {

    const listItem5 = document.querySelector(".content-list li:nth-child(5)");
    const listItem7 = document.querySelector(".content-list li:nth-child(7)");
    const listItem16 = document.querySelector(".content-list li:nth-child(16)");
    const listItem18 = document.querySelector(".content-list li:nth-child(18)");

    
    function applyStyle() {
        if (window.innerWidth >= 1200) {
            function interpolateValue(x, xMin, xMax, yMin, yMax) {
            return ((x - xMin) * (yMax - yMin)) / (xMax - xMin) + yMin;
            }
                
            function updateListItemWidth() {
                const screenWidth = window.innerWidth;
                const availableWidth = screenWidth + interpolateValue(screenWidth, 1200, 1559, 155, 280);
                const newWidth = availableWidth / 2;
                listItem5.style.width = newWidth + "px";
                listItem7.style.width = newWidth + "px";
                listItem16.style.width = newWidth + "px";
                listItem18.style.width = newWidth + "px";
            
            }
            updateListItemWidth();
            window.addEventListener("resize", updateListItemWidth);
        }         
    }
    applyStyle();
    window.addEventListener('resize', applyStyle);


    function applyStyleMore() {
        if (window.innerWidth >= 1560) {
            function interpolateValueMore(x, xMin, xMax, yMin, yMax) {
            return ((x - xMin) * (yMax - yMin)) / (xMax - xMin) + yMin;
            }
                
            function updateListItemWidthMore() {
                const screenWidth = window.innerWidth;
                const availableWidth = screenWidth + interpolateValueMore(screenWidth, 1560, 1920, 145, 260);
                const newWidth = availableWidth / 2;
                listItem5.style.width = newWidth + "px";
                listItem7.style.width = newWidth + "px";
                listItem16.style.width = newWidth + "px";
                listItem18.style.width = newWidth + "px";
            
            }
            updateListItemWidthMore();
            window.addEventListener("resize", updateListItemWidthMore);
        }
              
    }
    applyStyleMore();
    window.addEventListener('resize', applyStyleMore);
});



