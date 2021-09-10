(function() {
    const sidebarHamburger = document.querySelector('.sidebar__hamburger_link');
    const sidebarClose = document.querySelector('.siebar__close');
    const sidebarMenu = document.querySelector('.sidebar');
    const sidebarClass = 'sidebar__opened';

    sidebarHamburger.addEventListener('click', function(e) {
        e.preventDefault();

        sidebarMenu.classList.add(sidebarClass);
    });

    sidebarClose.addEventListener('click', function(e) {
        e.preventDefault();

        sidebarMenu.classList.remove(sidebarClass);
    });
}());