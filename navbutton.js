const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const DropDownMenu = document.querySelector('.dropdown_menu')


toggleBtn.onclick = function () {
    DropDownMenu.classList.toggle('open')
    const isOpen = DropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}
