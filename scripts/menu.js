function clickNavigation() {

    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }
}

function resize() {

    if (window.innerWidth >= 880) {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'row';
    } else {
        menu.style.display = 'none'
    }
}