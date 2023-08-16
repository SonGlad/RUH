const files = [
  { name: "file1.pdf", type: "pdf" },
  { name: "file2.epub", type: "epub" },
  { name: "file3.rtf", type: "rtf" },
  { name: "file4.mobi", type: "mobi" },
  { name: "file5.html", type: "html" },
  { name: "file6.print", type: "print" },
  { name: "file7.zip", type: "zip"}
];


const myModalList = document.querySelector('#modal-list');

const listItems = Array.from(myModalList .children); 


listItems.forEach(item => {
  const itemId = item.getAttribute("id");
  const fileInfo = files.find(file => itemId === file.type);
  if (fileInfo) {
    item.classList.add("modal-active-array-item");
  }
});



// JS для активности элементов в модалке


document.addEventListener('click', (event) => {
  if (!event.target.closest('#modal-list')) {
    listItems.forEach(item => {
      item.classList.remove('modal-active-item');
      item.firstElementChild.classList.remove('modal-active-item-svg');
    });
  }
});


listItems.forEach(item => {
  const svgElement = item.firstElementChild;

  item.addEventListener('click', (event) => {
    event.stopPropagation();

    listItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('modal-active-item');
        otherItem.firstElementChild.classList.remove('modal-active-item-svg');
      }
    });

    item.classList.toggle('modal-active-item');
    svgElement.classList.toggle('modal-active-item-svg');
  });
});


