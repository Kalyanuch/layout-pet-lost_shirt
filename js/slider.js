(function() {
    const slidesInterval = 3000;
    const slideItems = document.querySelectorAll('.fade_slider__item');
    const slideClass = 'fade_slider__item_visible';

    let counter = 0;

    if(slideItems)
        slideItems[0].classList.add(slideClass);

    setInterval(function() {
        slideItems[counter].classList.remove(slideClass);

        counter++;

        if(counter == slideItems.length)
            counter = 0;

        slideItems[counter].classList.add(slideClass);
    }, slidesInterval);
}());