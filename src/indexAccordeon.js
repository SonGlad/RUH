// const accordeonParent = document.querySelectorAll('.hero-accordeon-item');

// accordeonParent.forEach((item) =>{
    
//     item.querySelector('.accordeon-title').onclick = function(){
//      const accordeon = this.closest('.hero-accordeon-item').querySelector('.accordeon')

//      accordeon.classList.toggle('accordeon-visible')
//     }
// })

// document.addEventListener("DOMContentLoaded", function() {
//     const accordeonItems = document.querySelectorAll(".hero-accordeon-item");
  
//     accordeonItems.forEach(item => {
//       const title = item.querySelector(".accordeon-title");
//       const content = item.querySelector(".accordeon");
  
//       title.addEventListener("click", () => {
//         if (item.classList.contains("accordeon-visible")) {
//           item.classList.remove("accordeon-visible");
//         } else {
//           accordeonItems.forEach(accItem => {
//             accItem.classList.remove("accordeon-visible");
//           });
//           item.classList.add("accordeon-visible");
//         }
//       });
//     });
//   });

// const accordeonList = document.querySelector('.hero-accordeon-item');
// const accordeonTitle = document.querySelector('.accordeon-title')
// const accordeonContent = document.querySelector('.accordeon');

// accordeonTitle.addEventListener('click', accordeonOpen);

// function accordeonOpen(){
//     accordeonContent.classList.toggle('accordeon-visible');
//     accordeonList.classList.add('.hero-accordeon-item-active');
// };