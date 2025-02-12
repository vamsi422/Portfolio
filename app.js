const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');

let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if(activeLink != i){
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})

document.addEventListener("DOMContentLoaded", function () {
    function revealOnScroll() {
        let section = document.querySelector(".contact-section");
        let sectionTop = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 50) {
            section.classList.add("visible");
        }
    }

    window.addEventListener("scroll", revealOnScroll);
});
