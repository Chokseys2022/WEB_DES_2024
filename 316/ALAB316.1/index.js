// ALAB 316.1.1:
// DOM Manipulation (Part One)

// Menu data structure
const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// Part 1: Getting Started:
// Select and cache the main element
let mainEl = document.querySelector("main");

// Set the background color of main element
mainEl.style.backgroundColor = "const(--main-bg)";

// Set the content of main element to header 1
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex ctr to main element
mainEl.classList.add("flex-ctr");

// Part 2: Creating a Menu Bar
// Add blank menu
let topMenuEl = document.getElementById("top-menu");
// add height of top menu element
topMenuEl.style.height = "100%";
// set background color of top menu element
topMenuEl.style.backgroundColor = "const(--top-menu-bg)";
// Add a class of flex around to top menu
topMenuEl.classList.add("flex-ctr");

// Part 3: Adding Menu Buttons:
// Iterate over the menuLinks array
menuLinks.forEach(function (link) {
  // Create a new <a> element
  const linkElement = document.createElement("a");

  // Set the href attribute
  linkElement.setAttribute("href", link.href);

  // Set the content of the <a> element
  linkElement.textContent = link.text;

  // Append the <a> element to the topMenuEl element
  topMenuEl.appendChild(linkElement);
});
//
