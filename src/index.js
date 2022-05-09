const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')


// header
const headerNav = document.querySelectorAll("nav a");
headerNav.forEach((each, index) => each.textContent = siteContent.nav[`nav-item-${index + 1}`]);
headerNav.forEach(each => each.className = "italic");
// headerNav[0].textContent = siteContent["nav"]["nav-item-1"];
// headerNav[1].textContent = siteContent["nav"]["nav-item-2"];
// headerNav[2].textContent = siteContent["nav"]["nav-item-3"];
// headerNav[3].textContent = siteContent["nav"]["nav-item-4"];
// headerNav[4].textContent = siteContent["nav"]["nav-item-5"];
// headerNav[5].textContent = siteContent["nav"]["nav-item-6"];


// cta
const cta = document.querySelector('.cta-text h1');
const ctaText = document.querySelector(".cta-text button");
cta.textContent = siteContent.cta.h1;
ctaText.textContent = siteContent.cta.button;


// features
const features = document.querySelector(".top-content .text-content:nth-of-type(1) h4");
const featuresText = document.querySelector(".top-content .text-content:nth-of-type(1) p");
features.textContent = siteContent["main-content"]["features-h4"];
featuresText.textContent = siteContent["main-content"]["features-content"];


// about
const about = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
const aboutText = document.querySelector(".top-content .text-content:nth-of-type(2) p");
about.textContent = siteContent["main-content"]["about-h4"];
aboutText.textContent = siteContent["main-content"]["about-content"];


// services
const services = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
const servicesText = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
services.textContent = siteContent["main-content"]["services-h4"];
servicesText.textContent = siteContent["main-content"]["services-content"];


// product
const product = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
const productText = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
product.textContent = siteContent["main-content"]["product-h4"];
productText.textContent = siteContent["main-content"]["product-content"];


// vision
const vision = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
const visionText = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
vision.textContent = siteContent["main-content"]["vision-h4"];
visionText.textContent = siteContent["main-content"]["vision-content"];


// contact
const contact = document.querySelector(".contact h4"); 
const address = document.querySelector(".contact p:nth-of-type(1)");
const phone = document.querySelector(".contact p:nth-of-type(2)");
const email = document.querySelector(".contact p:nth-of-type(3)");

contact.textContent = siteContent.contact["contact-h4"];
address.textContent = siteContent.contact.address;
phone.textContent = siteContent.contact.phone;
email.textContent = siteContent.contact.email;


// copyright
const copyright = document.querySelector("footer a");
copyright.textContent = siteContent.footer.copyright;
copyright.className = "bold";


// images
const logo = document.querySelector("#logo-img");
const ctaImg = document.querySelector("#cta-img");
const accentImg = document.querySelector("#middle-img");

logo.src = siteContent.images["logo-img"];
ctaImg.src = siteContent.images["cta-img"];
accentImg.src = siteContent.images["accent-img"];