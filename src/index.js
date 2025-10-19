import './style.css';
import loadHome from './home.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';

loadHome();

const homeBtn = document.querySelector('nav button:nth-child(1)');
const menuBtn = document.querySelector('nav button:nth-child(2)');
const contactBtn = document.querySelector('nav button:nth-child(3)');

homeBtn.addEventListener('click', loadHome);
menuBtn.addEventListener('click', loadMenu);
contactBtn.addEventListener('click', loadContact);