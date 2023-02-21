const menu = [
    {
        'name': 'samosa',
        'category': 'breakfast',
        'price': '15₹',
        'image': './Images/samosa.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Aalu Poha',
        'category': 'breakfast',
        'price': '15₹',
        'image': './Images/aalupoha.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Dosa',
        'category': 'lunch',
        'price': '35₹',
        'image': './Images/dosa.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Noodles',
        'category': 'evening',
        'price': '20₹',
        'image': './Images/noodles.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Rajma Rice',
        'category': 'dinner',
        'price': '40₹',
        'image': './Images/rajmarice.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Roti Sabji',
        'category': 'lunch',
        'price': '60₹',
        'image': './Images/rotisabji.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Dal Rice',
        'category': 'lunch',
        'price': '55₹',
        'image': './Images/dalrice.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Pizza',
        'category': 'dinner',
        'price': '30₹',
        'image': './Images/pizza.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'manchurian',
        'category': 'evening',
        'price': '45₹',
        'image': './Images/manchurian.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'fruits',
        'category': 'lunch',
        'price': '20₹',
        'image': './Images/fruits.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'gup chup',
        'category': 'evening',
        'price': '60₹',
        'image': './Images/gupchup.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Aalu bhonda',
        'category': 'breakfast',
        'price': '50₹',
        'image': './Images/aalubhonda.jpg',
        'author': 'Ujjwal',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
    {
        'name': 'Ek Aur samosa',
        'category': 'Special',
        'price': '1000₹',
        'image': './Images/samosa.jpg',
        'author': 'Ujjwal',
        'description': 'I love Samosas a very delicious food items I have ever ate. adipisicing elit. Doloribus debitis ducimus non aut! Excepturi recusandae, sint voluptate error, quaerat'
    },
]

const uniqueList = [
    "All",
    ...new Set(menu.map(item => {
        return item.category;
    })
    )],

    navbar = document.querySelector('nav .links'),
    wrapper = document.querySelector('.wrapper');

uniqueList.map(item => {
    const link = `<a onclick="food('${item}')">${item.charAt(0).toUpperCase() + item.slice(1)}</a>`;
    navbar.insertAdjacentHTML('beforeend', link);
});

const menudata = (curElem) => {
    curElem.map((item, index) => {
        const { name, category, description, image, price, author } = item,
            card = `<div class="card">
                    <div class="info">
                        <div>
                            <span class="id">${index + 1}</span>
                            <span class="name">${name}</span>
                        </div>
                        <span class="category">${category}</span>
                    </div>
                        <div class="description">
                            <span>${description}</span>
                            <a>read more</a>
                        </div>
                    <div class="image">
                        <img src=${image} alt=${name}>
                    </div>
                    <div class="footer">
                        <div class="author" title="${author}">${author}</div>
                        <button>order now</button>
                        <span class="price">${price}</span>
                    </div>
                </div>`
        wrapper.insertAdjacentHTML('beforeend', card);
    })
}
menudata(menu);
const food = (category) => {
    wrapper.innerHTML = '';

    const updatedList = menu.filter((curElem) => {
        if (category === 'All') {
            return menudata
        }
        const list = curElem.category === category;
        // wrapper.innerHTML = list;
        return curElem.category === category;
    });
    menudata(updatedList);
    // console.log(updatedList);
}

navbar.firstElementChild.classList.add('active');

const navlinks = document.querySelectorAll('nav .links a');

navlinks.forEach(item => {
    item.setAttribute('onmousedown', 'active(this)');
})

const active = (item) => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    item.classList.add('active');
} 
