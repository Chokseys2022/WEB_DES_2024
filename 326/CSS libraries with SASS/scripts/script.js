document.addEventListener("DOMContentLoaded", function() {
    // Contact form submission
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            document.getElementById("formMessage").innerText = "Thank you for reaching out!";
            contactForm.reset();
        });
    }

    // Load products dynamically
    const productsContainer = document.getElementById("products");
    if (productsContainer) {
        const products = [
            { name: "Gold Necklace", price: "$120" },
            { name: "Silver Earrings", price: "$75" },
            { name: "Diamond Ring", price: "$250" }
        ];
        
        products.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
            productsContainer.appendChild(productDiv);
        });
    }
});
