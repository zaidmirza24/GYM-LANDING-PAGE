console.log('Hey Iam Zaid Mirza.....')


document.getElementById('sbt').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Form Submitted Successfully!');
});
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');

    navToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1000) {
            navbar.classList.remove('active');
        }
    });
});

