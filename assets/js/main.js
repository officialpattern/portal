/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION====================*/

const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 300,
    //reset: true
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home__footer`, {delay: 700})
sr.reveal(`.home__img`, {delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, {origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`, {origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`, {origin: 'right'})
sr.reveal(`.case__img`, {origin: 'top'})
sr.reveal(`.case__data`)










//////////////
// Find the "Subscribe" button by its id
const subscribeButton = document.getElementById("subscribe-button");
const emailInput = document.getElementById("emailInput");

// Add a click event listener to the button
subscribeButton.addEventListener("click", function() {
  // Define your email address
  const emailAddress = "patterns.socialaccess@example.com";
  const myname = emailInput.value;
  // Define the email subject and body
  const emailSubject = "Contact Me";
  const emailBody = `Hello sir, My name is ${myname}.%0D%0A`
                    +
                    `Email: Fill the detail%0D%0AMobile: Fill the detail%0D%0A` 
                    + 
                    `%0D%0A[write your message here, we will contact you soon]`;

  // Create a mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  // Open the user's email client with the mailto link
  window.location.href = mailtoLink;
});







// const hoverBox = document.getElementById("hover-box");
const button = document.getElementById("more-info-button");
const hoverBox = document.getElementById("hover-box");
const closeButton = document.getElementById("close-button");

button.addEventListener("click", () => {
  hoverBox.style.visibility = "visible";
});

closeButton.addEventListener("click", () => {
  hoverBox.style.visibility = "hidden";
});




///////////////////////////
// FOR PRODUCT CARDS



const moreInfoIcon1 = document.querySelectorAll('.more-info-icon1');
const productPopup1 = document.getElementById('product-popup1');
const closeProductPopup1 = document.getElementById('close-product-popup1');

moreInfoIcon1.forEach((icon) => {
  icon.addEventListener('click', () => {
    productPopup1.style.visibility = 'visible';
  });
});
closeProductPopup1.addEventListener('click', () => {
  productPopup1.style.visibility = 'hidden';
});

const moreInfoIcon2 = document.querySelectorAll('.more-info-icon2');
const productPopup2 = document.getElementById('product-popup2');
const closeProductPopup2 = document.getElementById('close-product-popup2');

moreInfoIcon2.forEach((icon) => {
  icon.addEventListener('click', () => {
    productPopup2.style.visibility = 'visible'; // Corrected line
  });
});
closeProductPopup2.addEventListener('click', () => {
  productPopup2.style.visibility = 'hidden'; // Corrected line
});

const moreInfoIcon3 = document.querySelectorAll('.more-info-icon3');
const productPopup3 = document.getElementById('product-popup3');
const closeProductPopup3 = document.getElementById('close-product-popup3');

moreInfoIcon3.forEach((icon) => {
  icon.addEventListener('click', () => {
    productPopup3.style.visibility = 'visible'; // Corrected line
  });
});
closeProductPopup3.addEventListener('click', () => {
  productPopup3.style.visibility = 'hidden'; // Corrected line
});

const moreInfoIcon4 = document.querySelectorAll('.more-info-icon4');
const productPopup4 = document.getElementById('product-popup4');
const closeProductPopup4 = document.getElementById('close-product-popup4');

moreInfoIcon4.forEach((icon) => {
  icon.addEventListener('click', () => {
    productPopup4.style.visibility = 'visible'; // Corrected line
  });
});
closeProductPopup4.addEventListener('click', () => {
  productPopup4.style.visibility = 'hidden'; // Corrected line
});


const moreInfoIcon5 = document.querySelectorAll('.more-info-icon5');
const productPopup5 = document.getElementById('product-popup5');
const closeProductPopup5 = document.getElementById('close-product-popup5');

moreInfoIcon5.forEach((icon) => {
  icon.addEventListener('click', () => {
    productPopup5.style.visibility = 'visible'; // Corrected line
  });
});
closeProductPopup5.addEventListener('click', () => {
  productPopup5.style.visibility = 'hidden'; // Corrected line
});


const moreInfoIcon6 = document.querySelectorAll('.more-info-icon6');
const productPopup6 = document.getElementById('product-popup6');
const closeProductPopup6 = document.getElementById('close-product-popup6');

moreInfoIcon6.forEach((icon) => {
  icon.addEventListener('click', () => {
    productPopup6.style.visibility = 'visible'; // Corrected line
  });
});
closeProductPopup6.addEventListener('click', () => {
  productPopup6.style.visibility = 'hidden'; // Corrected line
});


// PRODUCT CARD POP UP ENDS HERE
/////////////////