let main = document.getElementById('main');
let add = document.getElementById('add');
let bgDiv = document.getElementById('bg-div');
let submit = document.getElementById('button-submit');
let cancel = document.getElementById('cancel');
let title = document.getElementById('title');
let author = document.getElementById('author');
let page = document.getElementById('page');
let read = document.getElementById('read');

let myLibrary = [];

function Book(a, b, c, d) {
    this.title = a;
    this.author = b;
    this.page = c;
    this.read = d;
};

function isChecked() {
    if(read.checked) {
        return 'yes'
    } else {
        return 'no'
    }
};

function warning() {
    if(title.value.length < 1) {
        title.setCustomValidity('Insert a title!');
        title.reportValidity();
    } else if(author.value.length < 1) {
        author.setCustomValidity('Insert an author!');
        author.reportValidity();
    } else if(page.value.length < 1) {
        page.setCustomValidity('You forgot the pages!');
        page.reportValidity();
    }
};

function checkLength() {
    if(title.value.length > 0 && author.value.length > 0 && page.value.length > 0) {
        return true;
    } else {
        return false;
    }
};

function createBook() {
    let divBook = document.createElement('div');
    if(myLibrary[myLibrary.length - 1].read === 'yes') {
        divBook.classList.add('book2');
    } else {
        divBook.classList.add('book');
    }
    

    let titleBook = document.createElement('div');
    let authorBook = document.createElement('div');
    let pageBook = document.createElement('div');
    let readBook = document.createElement('div');
    let remove = document.createElement('button');

    main.appendChild(divBook);
    divBook.appendChild(titleBook);
    divBook.appendChild(authorBook);
    divBook.appendChild(pageBook);
    divBook.appendChild(readBook);
    divBook.appendChild(remove);

    titleBook.textContent = myLibrary[myLibrary.length - 1].title;
    authorBook.textContent = `Author: ${myLibrary[myLibrary.length - 1].author}`;
    pageBook.textContent = `Pages: ${myLibrary[myLibrary.length - 1].page}`;
    readBook.textContent = `Read? ${myLibrary[myLibrary.length - 1].read}`;
    remove.textContent = 'Remove Book';

    remove.addEventListener('click', function() {
        divBook.remove()
    })
}

function addBookToLibrary() {
    if(checkLength() === true) {
        const newBook = new Book(title.value, author.value, page.value, isChecked());
        myLibrary.push(newBook);
        bgDiv.style.display = 'none';
        createBook()
    }
};


add.addEventListener('click', function() {
    bgDiv.style.display = 'flex';
})

submit.addEventListener('click', function() {
    warning()
    addBookToLibrary()
})

cancel.addEventListener('click', function() {
    bgDiv.style.display = 'none';
})
