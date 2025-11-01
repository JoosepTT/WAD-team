async function loadMenu() {
    const response = await fetch('../html/menu.html');
    const html = await response.text();
    const header = document.getElementById('header');
    header.insertAdjacentHTML('afterend', html);
    const avatar = document.getElementById('image-profile');
    const menu = document.getElementById('menu');
    const offset = header.offsetHeight;
    menu.style.top = `calc(${offset}px - 0.8em)`;

    const name = menu.querySelector('li:nth-child(1)');
    const email = menu.querySelector('li:nth-child(2)');
    name.textContent = "Maria Saar", // to be replaced with existing user
    email.textContent = "maria.saar@ut.ee";

    avatar.addEventListener('click', (e) => {
        e.stopPropagation();
        if (visible == false) {
            menu.classList.toggle('active');
            visible = true;
        } else {
            menu.classList.remove('active');
            visible = false;
        }
    });
}

let visible = false;
loadMenu()