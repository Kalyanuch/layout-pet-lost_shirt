(function() {
    const iso = new Isotope( document.querySelector('.products__list'), {
        itemSelector: '.products__item',
        filter: '.latest'
    });

    const filterItems = document.querySelectorAll('.filter__link');
    const filterClass = 'active';

    filterItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();

            let activeItem = document.querySelector('.filter .' + filterClass);

            if(activeItem)
                activeItem.classList.remove(filterClass);

            item.closest('.filter__item').classList.add(filterClass);

            const filterName = item.getAttribute('data-filter');

            iso.arrange({
                filter: `.${filterName}`
            });
        });
    });
}());