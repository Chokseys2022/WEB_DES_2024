const form = document.getElementById("contact");
const username = form.elements.username.value;
const email = form.elements.email.value;
const message = form.elements.message.value;

console.log(form);



form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    emailjs.sendForm("service_sdyabtr","contact_form", this)
    .then(res => {
        console.log('SUCCESS!', res.status, res.text);
    })
    .catch(e => console.error(e));
})

document.addEventListener("DOMContentLoaded", () => emailjs.init("QXsLcN4oXQf4dqzK5"))
