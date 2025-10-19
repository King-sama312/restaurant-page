export default function loadContact() {
    const content = document.getElementById('content');
    content.textContent = '';

    const title = document.createElement('h1');
    title.textContent = "Contact Us";

    const info =document.createElement('div');
    info.classList.add('contact-info');

    const phone = document.createElement('p');
    phone.textContent = 'Phone +91 99999 99999';

    const email = document.createElement('p');
    email.textContent = "Email: divinecuisine@heaven.com";

    const location = document.createElement('p');
    location.textContent = "7th Cloud Avenue, Sky Kingdom";

    info.appendChild(phone);
    info.appendChild(email);
    info.appendChild(location);

    content.appendChild(title);
    content.appendChild(info);
}