const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.querySelector('.close-btn');
const listItems = document.querySelectorAll('.modal-item');

// Відкрити модалку
openModalBtn.onclick = function () {
  modal.style.display = 'block';
};

// Закрити модалку
closeModalBtn.onclick = function () {
  modal.style.display = 'none';
};

// Закрити модалку при кліку поза її межами
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Закрити модалку при натисканні на пункт списку
listItems.forEach(function (item) {
  item.onclick = function () {
    modal.style.display = 'none';
  };
});
