
//*******************CODE WITH EXPLANATIONS*******************


// // Part One
// // Select and cache the <main> element in a variable named mainEl.
// // This allows easy access to modify the main section of the document.
// let mainEl = document.getElementsByTagName('main');

// // Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// // This ensures the background color matches the site's theme dynamically.
// mainEl[0].style.backgroundColor = 'var(--main-bg)';

// // Set the content of mainEl to <h1>DOM Manipulation</h1>.
// // This updates the main section with a heading to indicate the topic.
// mainEl[0].innerHTML = `<h1>DOM Manipulation</h1>`;

// // Add a class of flex-ctr to mainEl to center align its contents.
// // This applies predefined styling for layout consistency.
// mainEl[0].classList.add(`flex-ctr`);

// // Part Two
// // Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// // This enables direct manipulation of the navigation menu.
// let topMenuEl = document.getElementById(`top-menu`);

// // Set the height of the topMenuEl element to be 100%.
// // Ensures that the menu takes up its designated space.
// topMenuEl.style.height = '100%';

// // Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// // Keeps the menu's background color in line with the site's theme.
// topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// // Add a class of flex-around to topMenuEl to evenly distribute menu items.
// // This applies CSS styles to space out the menu links.
// topMenuEl.classList.add(`flex-around`);

// // Part Three
// // Define a menu data structure with links and sublinks.
// // This provides a structured way to generate menu items dynamically.
// let menuLinks = [
//   { text: 'about', href: '/about' },
//   {
//     text: 'catalog',
//     href: '#',
//     subLinks: [
//       { text: 'all', href: '/catalog/all' },
//       { text: 'top selling', href: '/catalog/top' },
//       { text: 'search', href: '/catalog/search' },
//     ],
//   },
//   {
//     text: 'orders',
//     href: '#',
//     subLinks: [
//       { text: 'new', href: '/orders/new' },
//       { text: 'pending', href: '/orders/pending' },
//       { text: 'history', href: '/orders/history' },
//     ],
//   },
//   {
//     text: 'account',
//     href: '#',
//     subLinks: [
//       { text: 'profile', href: '/account/profile' },
//       { text: 'sign out', href: '/account/signout' },
//     ],
//   },
// ];

// // Iterate over the menuLinks array to create and append menu items dynamically.
// menuLinks.forEach((el) => {
//   let link = document.createElement('a'); // Create an <a> element.
//   link.setAttribute('href', el.href); // Set the href attribute.
//   link.textContent = el.text; // Set the text content of the link.
//   topMenuEl.appendChild(link); // Append the new link to topMenuEl.
// });

// // Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
// // This allows manipulation of the submenu.
// let subMenuEl = document.getElementById(`sub-menu`);

// // Set the height of subMenuEl to be 100%.
// // Ensures the submenu has the correct height.
// subMenuEl.style.height = `100%`;

// // Set the background color of subMenuEl using the CSS variable --sub-menu-bg.
// // Matches the submenu's appearance with the site's theme.
// subMenuEl.style.backgroundColor = `var(--sub-menu-bg)`;

// // Add the class of flex-around to the subMenuEl for styling.
// // This spaces out submenu items.
// subMenuEl.classList.add(`flex-around`);

// // Set the CSS position property of subMenuEl to absolute for proper positioning.
// // Ensures the submenu appears in the right place.
// subMenuEl.style.position = `absolute`;

// // Set the CSS top property of subMenuEl to 0 to initially hide it.
// // Keeps the submenu hidden until needed.
// subMenuEl.style.top = `0`;

// // Select all <a> elements inside topMenuEl and store them in a variable named topMenuLinks.
// // This provides access to all top-level menu links.
// let topMenuLinks = document.querySelectorAll(`a`);

// // Variable to store the current link object.
// let currentSubLink;

// // Attach a delegated 'click' event listener to topMenuEl.
// topMenuEl.addEventListener(`click`, (e) => {
//   e.preventDefault(); // Prevent the default action of the <a> tag.

//   if (e.target.localName !== `a`) return; // Exit if the clicked element is not an <a>.

//   // Toggle active class on the clicked element.
//   if (e.target.classList.contains(`active`)) {
//     e.target.classList.remove(`active`);
//   } else {
//     topMenuLinks.forEach((link) => link.classList.remove(`active`)); // Remove active class from all links.
//     e.target.classList.add(`active`); // Add active class to clicked link.
//   }

//   // Find the corresponding menu item and handle submenu logic.
//   for (let link of menuLinks) {
//     if (e.target.textContent === `about`) {
//       mainEl[0].innerHTML = `<h1>ABOUT</h1>`;
//       break;
//     } else if (link.text === e.target.textContent && link.subLinks && e.target.classList.contains(`active`)) {
//       currentSubLink = link.subLinks;
//       buildSubMenu(currentSubLink); // Build submenu for the selected item.
//       subMenuEl.style.top = `100%`; // Display submenu.
//       break;
//     } else {
//       subMenuEl.style.top = `0`; // Hide submenu.
//     }
//   }
// });

// // Attach a delegated 'click' event listener to subMenuEl.
// subMenuEl.addEventListener(`click`, (e) => {
//   e.preventDefault(); // Prevent the default behavior of anchor tags.

//   if (e.target.localName !== `a`) return; // Ignore clicks that are not on <a> elements.

//   subMenuEl.style.top = `0`; // Hide submenu after selection.

//   topMenuLinks.forEach((link) => link.classList.remove(`active`)); // Remove active class from all top-level links.

//   // Update the mainEl content to reflect the selected submenu item.
//   mainEl[0].innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
// });

// // Helper function to build the submenu dynamically.
// function buildSubMenu(subLinks) {
//   subMenuEl.innerHTML = ``; // Clear the existing submenu content.

//   subLinks.forEach((link) => {
//     let anchor = document.createElement(`a`); // Create an <a> element.
//     anchor.setAttribute(`href`, link.href); // Set the href attribute.
//     anchor.textContent = link.text; // Set the link text.
//     subMenuEl.appendChild(anchor); // Append the link to the submenu.
//   });
// }
