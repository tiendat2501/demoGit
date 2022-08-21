// Declare variable
var carts = [];
if(localStorage.getItem('carts') != null) {
    carts = JSON.parse(localStorage.getItem('carts'));
}

var books = [
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    },
    {
        id: 1,
        name: 'Sài Gòn Những Mảnh Ghép Rời Ký Ức',
        author: 'Lê Văn Nghĩa',
        image: './assets/images/sai-gon-nhung-manh-ghep-roi-ky-uc_116334_1.png',
        currentPrice: 106000,
        oldPrice: 125000,
        sale: 15,
    },
    {
        id: 2,
        name: 'Thỏ Peter - Cuộc Giải Cứu Ngày Giáng Sinh (Tái Bản 2021)',
        author: 'Emma Thompson',
        image: './assets/images/tho-peter-cuoc-giai-cuu-ngay-giang-sinh_32047_1.png',
        currentPrice: 63500,
        oldPrice: 75000,
        sale: 15,
    }
]

// Set action for add to cart
function addToCart(id) {
    var hasCart = carts.find(function(value) {
        return value.id == id;
    });
    if(hasCart) {
        hasCart.quantity += 1;
        showToast({
            message: `Số lượng sách trong giỏ hàng vừa được tăng thêm 1 : ${hasCart.name}`,
            type: 'info',
            duration: 2000
        });
    }
    else {
        var newCart = books.find(function(value) {
            return value.id == id;
        });
        carts.push({
            id: newCart.id,
            name: newCart.name,
            author: newCart.author,
            image: newCart.image,
            currentPrice: newCart.currentPrice,
            quantity: 1
        });
        showToast({
            message: `Bạn đã thêm vào giỏ hàng sách: ${newCart.name}`,
            type: 'success',
            duration: 2000
        });
    }
    localStorage.setItem('carts', JSON.stringify(carts));
    loadCart();
}

function removeFromCart(id) {
    var cart = books.find(function(value) {
        return value.id == id;
    });
    carts = carts.filter(function(value) {
        return value.id != id;
    });
    showToast({
        message: `Bạn vừa xóa trong giỏ hàng sách : ${cart.name}`,
        type: 'error',
        duration: 2000
    });
    localStorage.setItem('carts', JSON.stringify(carts));
    loadCart();
}

function loadCart() {
    var cartDOM = document.getElementById('cart-list');

    document.querySelector('.number-books-cart').innerHTML = carts.length

    if(carts.length > 0) {
        if(cartDOM.classList.contains('header-main--no-cart')) {
            cartDOM.classList.remove('header-main--no-cart');
        }

        var cartListDOM = document.querySelector('.app-header-main-cart__list-list');
        cartListDOM.innerHTML = '';

        carts.forEach(function(value) {
            var item = document.createElement('li');
            item.classList.add('app-header-main-cart-list__item');
            
            item.innerHTML = `
            <div class="app-header-main-cart-list-item__img">
                <img src="${value.image}" alt="">
            </div>
            <div class="app-header-main-cart-list-item__info">
                <div>${value.name}</div>
                <p>${value.author}</p>
                <span onclick="removeFromCart(${value.id})">Xóa</span>
            </div>
            <div class="app-header-main-cart-list-item__price">
                <h4>${new Intl.NumberFormat().format(value.currentPrice)}</h4>
                <p>${value.quantity}</p>
            </div>
            `;
            cartListDOM.append(item);
        });
    }
    else {
        if(!cartDOM.classList.contains('header-main--no-cart')) {
            cartDOM.classList.add('header-main--no-cart');
        }
    }
}

// Render data books
function renderBooks() {
    var listBooksDOM = document.querySelector('.app-content-books__list');
    listBooksDOM.innerHTML = '';
    var row = document.createElement('div');
    row.classList.add('row');

    books.forEach(function (value, index) {
        var col = document.createElement('div');
        col.classList.add('col', 'l-2-4', 'm-6', 'c-12');
        col.style.position = 'relative';

        col.innerHTML = `
        <div class="app-content-books__container">
            <a href="#" class="app-content-books__item">
                <div class="app-content-books-item__img">
                    <img src="${value.image}"
                        alt="">
                </div>
                <div class="app-content-books-item__info">
                    <div class="app-content-books-item-info__name">${value.name}</div>
                    <div class="app-content-books-item-info__author">${value.author}</div>
                    <div class="app-content-books-item-info__price">
                        <div class="app-content-books-item-info__price-current">${new Intl.NumberFormat().format(value.currentPrice)}</div>
                        <div class="app-content-books-item-info__price-old">${new Intl.NumberFormat().format(value.oldPrice)}</div>
                        <div class="app-content-books-item-info__price-sale">-${value.sale}%</div>
                    </div>
                </div>
            </a>
            <div class="app-content-books__pop-up">
                <div class="app-content-books-pop-up__name">${value.name}</div>
                <div class="app-content-books-pop-up__author">${value.author}</div>
                <div class="app-content-books-pop-up__price">
                    <div class="app-content-books-pop-up__price-current">${new Intl.NumberFormat().format(value.currentPrice)}</div>
                    <div class="app-content-books-pop-up__price-old">${new Intl.NumberFormat().format(value.oldPrice)}</div>
                </div>
                <div class="app-content-books-pop-up__sale">Giảm giá: ${value.sale}%</div>
                <div class="app-content-books-pop-up__btn">
                    <span onclick="addToCart(${value.id})">Thêm vào giỏ hàng</span>
                </div>
                <div class="app-content-books-pop-up__btn">
                    <a href="#">Xem chi tiết</a>
                </div>
            </div>
        </div>
        `;

        row.append(col);
    });

    listBooksDOM.append(row);    
}

// Call function
loadCategory();
renderBooks();
loadCart();