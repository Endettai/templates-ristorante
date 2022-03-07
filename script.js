{
    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    })

    AOS.init();

    function toggleMenu() {
        console.log('toggle menu');
        const toggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu');
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    }
}