// Mobile menu functionality
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

// Order Now Button
const orderNowButton = document.querySelector('.button.order-now');

orderNowButton.addEventListener("click", () => {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
});

// Contact Us Button
const contactButton = document.querySelector('.button.contact-us');

contactButton.addEventListener("click", () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

// Contact Us Form
const name = document.getElementById("name")
const submitButton = document.querySelector('.submit-button')
submitButton.addEventListener("click", () => {
        alert("Thank You " + name.value + ". We will contact you soon!")
    }
)






// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Responsive Breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

