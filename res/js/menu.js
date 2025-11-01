async function loadMenu() {
    let name = "Maria Saar"; // to be replaced with existing user
    let email = "maria.saar@ut.ee";
    const html = `
        <header id="menu">
            <ul>
                <li>${name}</li>
                <li>${email}</li>
                <li><a href="">Logout</a></li>
            </ul>
        </header>`;
    const header = document.getElementById('header');
    header.insertAdjacentHTML('afterend', html);
    const avatar = document.getElementById('image-profile');
    const menu = document.getElementById('menu');
    const offset = header.offsetHeight;
    menu.style.top = `calc(${offset}px - 0.8em)`;

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