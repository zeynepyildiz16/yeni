let bookList = [];




const toggleModal = () => {
    const sepet = document.querySelector(".sepet");
    sepet.classList.toggle("active");
};

// Kitabımızı çağırdığımız metod.Getbooks adlı bu metod kitaplarımı json datanın içinden okuyacak.
const getBooks = () => {
    fetch("./products.json")
        .then(res => res.json())
        .then((books) => (bookList = books));
};

getBooks();

const createBookStars = (starRate) => {
    let starRateHtml = "";
    for (let i = 1; i <= 5; i++) {
        if (Math.round(starRate) >= i)
            starRateHtml += `<i class="bi bi-star-fill active"></i>`
        else starRateHtml += `<i class="bi bi-star-fill"></i>`;
    }
    return starRateHtml;
};


const createBookItemsHtml = () => {
    const bookListEl = document.querySelector(".kitap_karti");
    let bookListHtml = "";
    bookList.forEach(book, index => {
        bookListHtml += ` <div class="col-5 ${ndex % 2 == 0 && "offset-2"} my-5">
        <div class="row kitap_karti">
          <div class="col-6">
            <img class="img-fluid shadow" src="${book.imgSource}" width="258" height="400" />
          </div>
          <div class="col-6  d-flex flex-column justify-content-space-between">
            <div class="kitap_detay">
              <span class="fos gray fs-5">${book.author}</span><br>
              <span class="fs-4 fw">${book.name}</span><br>
              <span class="yildizlar">
                ${createBookStars()}
                <span class="gray">${book.reviewCount}</span>
              </span>

            </div>
            <p class="kitap-bilgi fos gray">
              ${book.description}
            </p>
            <div>
              <span class="black fw-bold fs-4 me-2">${book.price}₺</span>
              ${book.oldPrice && `<span class="gray fs-6 fw-bold old-price"><s>${book.oldPrice}₺/s></span>`}
            </div>
            <button class="mor_buton">SEPETE EKLE</button>
          </div>
        </div>
      </div>`;
    });
    bookListEl.innerHTML = bookListHtml;
};

setTimeout(() => {
    createBookItemsHtml();
}, 100);
