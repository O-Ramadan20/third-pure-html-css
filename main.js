const toggleBtn = document.querySelector('.toggle-menu');
const droopMenuIcon = document.querySelector('.toggle-menu i');
const dropMenu = document.querySelector('.drop-menu');

toggleBtn.onclick = function () {
    dropMenu.classList.toggle('open')
    const isOpen = dropMenu.classList.contains('open')

    droopMenuIcon.classList = isOpen
    ? 'fa fa-bars fa-2x'
    : 'fa fa-xmark fa-2x'
}
