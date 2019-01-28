const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav Anchors
const navBar = document.querySelectorAll('a');
//Attempted to use forEach to run through each 'a' tag and give it 'nav-item-x' content
//Will come back and try for loop once MVP complete, writing them out one by one for now

// navBar.forEach(navItem => navItem.textContent = siteContent['nav'][`nav-item-${navBar.length -= (navBar.length -= 1)}`]);


navBar[0].textContent = siteContent['nav']['nav-item-1'];
navBar[1].textContent = siteContent['nav']['nav-item-2'];
navBar[2].textContent = siteContent['nav']['nav-item-3'];
navBar[3].textContent = siteContent['nav']['nav-item-4'];
navBar[4].textContent = siteContent['nav']['nav-item-5'];
navBar[5].textContent = siteContent['nav']['nav-item-6'];


//Section CTA-----------------------------------------------
//h1 needs line breaks
//const lineBreak = document.createElement('br');


//h1
const domIsAwesome = document.querySelector('h1');
const beforeH1 = document.createElement('h1');
const afterH1 = document.createElement('h1');
const newH1Array = siteContent['cta']['h1'].split(' ');


const allCtaH1 = document.querySelectorAll('.cta-text h1');
//console.log(allCtaH1);


//console.log(h1Array);

beforeH1.textContent = newH1Array[0];
domIsAwesome.textContent = newH1Array[1];
afterH1.textContent = newH1Array[2];

//***note to self:APPENDS/PREPENDS MUST BE AT THE BOTTOM!!!!
domIsAwesome.append(afterH1);
domIsAwesome.prepend(beforeH1);

//button
const button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

//cirlce header img
const circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent['cta']['img-src']);
circleImg.alt = "Header Cirlce Image";

//-------------------------------------------------------------


//MAIN CONTENT------------------------------------------------
//array to carry each h4 location
const mainContHFours = document.querySelectorAll('.main-content .text-content h4');
//array to carry each p location
const mainContentPs = document.querySelectorAll('.main-content .text-content p');

//console.log(mainContHFours);
//console.log(mainContentPs);

//features
mainContHFours[0].textContent = siteContent['main-content']['features-h4'];
mainContentPs[0].textContent = siteContent['main-content']['features-content'];

//about
mainContHFours[1].textContent = siteContent['main-content']['about-h4'];
mainContentPs[1].textContent = siteContent['main-content']['about-content'];

//services
mainContHFours[2].textContent = siteContent['main-content']['services-h4'];
mainContentPs[2].textContent = siteContent['main-content']['services-content'];

//product
mainContHFours[3].textContent = siteContent['main-content']['product-h4'];
mainContentPs[3].textContent = siteContent['main-content']['product-content'];

//vision
mainContHFours[4].textContent = siteContent['main-content']['vision-h4'];
mainContentPs[4].textContent = siteContent['main-content']['vision-content'];

//middle-img
const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']["middle-img-src"];
middleImg.alt = 'Middle Content Image';
//----------------------------------------------------------------

//Contact-----------------------------------------------------------
const contactHFour = document.querySelectorAll('.contact h4');
const contactPs = document.querySelectorAll('.contact p');

contactHFour.textContent = siteContent['contact']['contact-h4'];
contactPs[0].textContent = siteContent['contact']['address'];
contactPs[1].textContent = siteContent['contact']['phone'];
contactPs[2].textContent = siteContent['contact']['email'];

//-------------------------------------------------------------------

//Footer------------------------------------------------------
const footerP = document.querySelector('footer p');

footerP.textContent = siteContent['footer']['copyright'];
