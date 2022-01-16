/**Menu**/
function abrirMenu() {
    var menu = document.querySelector("#icon")
    var nav = document.querySelector('nav')
    menu.classList.toggle('fa-bars')
    nav.classList.toggle('active')
}