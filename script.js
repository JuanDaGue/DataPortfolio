document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const projectCards = document.querySelectorAll('.project-card');
let currentProject = 0;

document.getElementById('prev-btn').addEventListener('click', () => {
    projectCards[currentProject].classList.remove('active');
    currentProject = (currentProject - 1 + projectCards.length) % projectCards.length;
    projectCards[currentProject].classList.add('active');
    console.log(projectCards[currentProject])
});

document.getElementById('next-btn').addEventListener('click', () => {
    projectCards[currentProject].classList.remove('active');
    currentProject = (currentProject + 1) % projectCards.length;
    projectCards[currentProject].classList.add('active');
});

document.querySelectorAll('.toggle-description').forEach((button, index) => {
    button.addEventListener('click', () => {
        const description = projectCards[index].querySelector('.description-content');
        description.classList.toggle('active');
        const arrowIcon = document.querySelector('.arrow-icon');
        arrowIcon.classList.toggle('up');

    });
});

// Initially show the first project card
projectCards[currentProject].classList.add('active');


document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll('.project-card .link');

    projectCards.forEach(function(card) {
        card.addEventListener('click', function() {
            const projectUrl = card.getAttribute('data-url');
            window.open(projectUrl, '_blank'); // Opens the URL in a new tab
        });
    });
});

// document.querySelectorAll(".experience-card").array.forEach(element => {
    
//     element.addEventListener('mouseenter', function() {
//         document.querySelector('.title-card').style.display = 'none';
//         document.querySelector('.content-card').style.display = 'block';
//     });
    
//     element.addEventListener('mouseleave', function() {
//         document.querySelector('.title-card').style.display = 'block';
//         document.querySelector('.content-card').style.display = 'none';
//     });
// });

const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_95fs9im';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Handle CV Download Button
    document.getElementById('download-cv').addEventListener('click', function() {
        // Replace 'cv.pdf' with the path to your actual CV file
        window.open('./Curriculum/Cv-Juan David Guerrero UchimaATS.pdf', '_blank');
    });

    // Handle "Email Me" Button
    document.getElementById('email-me').addEventListener('click', function() {
        const email = "david.guerrero@udea.edu.co";
        const subject = "Contact";
        const body = "Hello David,";
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the mail client with pre-filled email, subject, and body
        window.location.href = mailtoLink;
    });
});

window.addEventListener('load', function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const mainContent = document.querySelectorAll('.main-content');

    // Use setTimeout to delay the removal of the loading screen by 2 seconds
    setTimeout(() => {
        // Add fade-out effect to loading screen
        loadingScreen.classList.add('fade-out');

        // Once the transition ends, hide the loading screen and show the main content
        loadingScreen.addEventListener('transitionend', () => {
            loadingScreen.style.display = 'none';
            mainContent.forEach(content => {
                content.style.display = 'block';
                content.classList.add('fade-in');
            });
        });
    }, 2000); // 2000 milliseconds = 2 seconds
});
