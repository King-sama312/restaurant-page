export default function loadHome(){
    const content = document.getElementById('content');
    content.textContent ="";

    const hero = document.createElement('div');
    hero.classList.add('hero');

    const headline = document.createElement('h1');
    headline.textContent = "King's Divine Cuisine";

    const sub = document. createElement('p');
    sub.textContent = 'Serving heavenly flavors since 1620.';

    hero.appendChild(headline);
    hero.appendChild(sub);

    const img = document.createElement('img');
    img.src = 'https://plus.unsplash.com/premium_photo-1661432769134-758550b8fedb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032';
    img.alt = 'Restaurant Image';

    const about = document.createElement('p');
    about.textContent = 'Our chefs craft each dish with passion, using only the freshest ingredients';

    content.appendChild(hero);
    content.appendChild(img);
    content.appendChild(about);


}
