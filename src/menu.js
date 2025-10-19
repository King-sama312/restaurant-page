export default function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = " ";
    const title = document.createElement('h1');
    title.textContent = "Our Menu";

    const menuList = document.createElement('div');
    menuList.classList.add('menu-list');

    const items = [
        { name: 'Celestial Ramen', desc: 'A divine blend of flovors that touch the soul.' },
        { name: 'Heavenly Suchi Platter', desc: 'Rolls made by angels, served with grace.' },
        { name: 'Golden Tempura', desc: 'Crispy perfection that melts in your mouth.' },
    ];

    items.forEach(item => {
        const dish = document.createElement('div');
        dish.classList.add('menu-item');

        const dishName = document.createElement('h3');
        dishName.textContent = item.name;

        const dishDesc = document.createElement('p');
        dishDesc.textContent = item.desc;

        dish.appendChild(dishName);
        dish.appendChild(dishDesc);
        menuList.appendChild(dish);
    });

    content.append(title);
    content.appendChild(menuList);
}
