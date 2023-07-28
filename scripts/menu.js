function openMenu() {
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }
}


function closeMenu() {
    if (menu.style.display == 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
    }
}


function selectMainAction() {
    if (window.innerWidth < 880) {
        closeMenu();
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