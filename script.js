$(document).ready(function() {
    // Open contact form modal
    $('#contact-button').click(function() {
        $('#contact-form-modal').modal('show');
    });

    // Change project image on list item click
    $('#our-project .list-group-item').click(function() {
        var image = $(this).data('image');
        $('#project-image').attr('src', image);
    });
});document.addEventListener("DOMContentLoaded", function() {
    // Change project image on list item click
    document.querySelectorAll('#our-project .list-group-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var image = item.getAttribute('data-image');
            document.getElementById('project-image').setAttribute('src', image);
        });
    });
});
const work = document.querySelector(".work");
const slider = document.querySelector(".slider");
const firstCardWidth = slider.querySelector(".card").offsetWidth;
const sliderChildrens = [...slider.children];
const dots = document.querySelectorAll(".dot");

let isDragging = false;
let timeoutId;

// Clone slides for infinite scrolling
const cardPerView = Math.round(slider.offsetWidth / firstCardWidth);
sliderChildrens.slice(-cardPerView).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin", card.outerHTML);
});
sliderChildrens.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML);
});

slider.classList.add("no-transition");
slider.scrollLeft = slider.offsetWidth;
slider.classList.remove("no-transition");

const updateDots = () => {
    const currentIndex = Math.round(slider.scrollLeft / firstCardWidth) % (sliderChildrens.length / 3);

    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

const infiniteScroll = () => {
    if (slider.scrollLeft === 0) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.scrollWidth - (2 * slider.offsetWidth);
        slider.classList.remove("no-transition");
    } else if (Math.ceil(slider.scrollLeft) === slider.scrollWidth - slider.offsetWidth) {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove("no-transition");
    }

    updateDots();

    clearTimeout(timeoutId);
    if (!work.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if (window.innerWidth < 800) return;

    timeoutId = setTimeout(() => {
        slider.scrollLeft += firstCardWidth;
        updateDots();
    }, 2500);
}

updateDots();

autoPlay();

slider.addEventListener("scroll", infiniteScroll);
work.addEventListener("mouseenter", () => clearTimeout(timeoutId));
work.addEventListener("mouseleave", autoPlay);

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        slider.scrollLeft = index * firstCardWidth;
        updateDots();
    });
});
function changeImage(src) {
    document.getElementById('mainImage').src = src;

    // Remove 'selected' class from all 'about-photos' elements
    const aboutPhotosElements = document.querySelectorAll('.about-photos');
    aboutPhotosElements.forEach(element => {
        element.classList.remove('selected');
    });

    // Add 'selected' class to the clicked element
    event.currentTarget.classList.add('selected');
}

