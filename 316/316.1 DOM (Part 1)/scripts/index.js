/* Document Object Model */

/** Accessing Elements */
// const blogPost = document.getElementById('blog-post');

/*** HTMLCollection (Will update live!) */
// const articleParagraphs = document.getElementsByClassName("article-para");

// Adding new paragraphs with the 'article-para' class will
// cause this 'articleParagraphs' variable to update!

// const allParagraphs = document.getElementsByTagName('p');

// Adding new paragraphs will cause this 'allParagraphs' variable to update!

// console.log("Getting Elements by Class Name:", articleParagraphs);
// console.log("Getting Elements by Tag Name:", allParagraphs);

/*** NodeList (Will NOT update live!) */
// const specializedParagraphs = document.getElementsByName('specialized-para');
// console.log("Getting Elements by Name:", specializedParagraphs);

/**** Query Selector - Access elements in the DOM that match the provided CSS Query
 * querySelector - Returns the first matching element.
 * querySelectorAll - Returns all matching elements.
 */
// const blogPostQuery = document.querySelector("#blog-post");
// console.log("Getting Blog Post (Query Selector): ", blogPostQuery);

// const blogPostArticle = document.querySelector("article");
// console.log("Getting Article (Query Selector): ", blogPostArticle);

// const articleParagraphsQuery = document.querySelectorAll(".article-para");
// console.log("Getting Article Paragraphs (Query Selector): ", articleParagraphsQuery);

// const allParagraphsQuery = document.querySelectorAll("p");
// console.log("Getting All Paragraphs (Query Selector): ", allParagraphsQuery);

// const specializedParagraphsQuery = document.querySelectorAll("div#blog-post>article>p[name='specialized-para']");
// console.log("Getting Specialized Paragraphs (Query Selector): ", specializedParagraphsQuery);
// console.log("# Specialized Paragraphs: ", specializedParagraphs.length);

// Adding new paragraphs with the 'specialized-para' name attribute value will NOT
// cause this specializedParagraphs variable to update!

/** Parent-to-Child Relationships NOTE: Make sure to uncomment 'blogPostArticle' variable on line 30 for these to work!! */

/*** parentNode v. parentElement */
// console.log("Blog Post Article Parent Element: ", blogPostArticle.parentElement);
// console.log("Blog Post Article Parent Node: ", blogPostArticle.parentNode);

/*** children v. childNodes */
// console.log("Blog Post Article Children: ", blogPostArticle.children);
// console.log("Blog Post Article Child Nodes: ", blogPostArticle.childNodes);

/*** firstChild v. firstElementChild */
// console.log("Blog Post Article First Child: ", blogPostArticle.firstChild);
// console.log("Blog Post Article First Element Child: ", blogPostArticle.firstElementChild);

/*** lastChild v. lastElementChild */
// console.log("Blog Post Article Last Child: ", blogPostArticle.lastChild);
// console.log("Blog Post Article Last Element Child: ", blogPostArticle.lastElementChild);

/*** nextSibling v. nextElementSibling */
// const firstParagraph = document.querySelector("p");
// const nextSibling = firstParagraph.nextSibling;
// console.log("First Paragraph Next Sibling: ", nextSibling);

// const nextElementSibling = firstParagraph.nextElementSibling;
// console.log("First Paragraph Next Element Sibling: ", nextElementSibling);

/*** previousSibling v. previousSiblingElement */
// const firstParagraph = document.querySelector("p");
// const previousSibling = firstParagraph.previousSibling;
// console.log("First Paragraph Previous Sibling: ", previousSibling);

// const previousElementSibling = firstParagraph.previousElementSibling;
// console.log("First Paragraph Previous Element Sibling: ", previousElementSibling);

/* Example Use Case of Next Element Sibling */
// let currentParagraph = document.querySelector("p");
// let foundElement = false;
// while (!foundElement) {
//     const content = currentParagraph.textContent;
//     if (content.includes("delectus")) {
//         console.log("Found the element!!!!!!");
//         foundElement = true;
//     } else {
//         currentParagraph = currentParagraph.nextElementSibling;
//     }
// }

// console.log(currentParagraph);

/** Creating & Adding Elements */

/*** CreateElement */

/*** AppendChild */

/*** Prepend */

/*** InsertBefore */


/** Removing Elements */

/** RemoveChild */


/** Replacing Elements */

/*** ReplaceChild */


/** Attributes */

/*** GetAttribute */

/*** SetAttribute */


/** Styling */


/** className and classList */


/** DOM Templating */

/*** Document Fragment */

/*** Template Node & cloneNode */

/*** Template Literals */

