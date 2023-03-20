const modal = document.querySelector('.modal')

function openModal() {
  modal.classList.add('active');
  document.getElementById("dark").style.display = "block";
}

function closeModal() {
  modal.classList.remove('active');
  document.getElementById("dark").style.display = "none";
}