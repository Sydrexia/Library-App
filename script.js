let myLibrary = []

const submit = document.getElementById('submit');
const library = document.querySelector('.library');

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
}

function addBooktoLibrary() {
    const author = document.querySelector('#author-input').value;
    const title = document.querySelector('#title-input').value;
    const pages = document.querySelector('#pages-input').value;
    const status = document.querySelector('#status-input').value;
    const newBook = new Book(author, title, pages, status);
    myLibrary.push(newBook);
}



function publishLibrary() {
    library.innerHTML = null;
    for (i = 0; i < myLibrary.length; i++) {
        const newDiv = document.createElement("div");
        const newAuthor = document.createElement('p');
        const newTitle = document.createElement('p');
        const newPages = document.createElement('p');
        const newStatus = document.createElement('button');
        const removeBook = document.createElement('button');
        removeBook.setAttribute("id", i);
        newStatus.classList.add('stat');

        newStatus.addEventListener('click', () => {
            if (event.target.innerHTML === 'Read') {
                event.target.innerHTML = 'Unread';
            } else {
                event.target.innerHTML = 'Read';
            }
        } )

        removeBook.addEventListener('click', () => {
            const number = event.target.id;
            if (number > -1) {
                myLibrary.splice(number, 1);
            }
            publishLibrary();
        })

        newAuthor.innerHTML = myLibrary[i].author;
        newTitle.innerHTML = myLibrary[i].title;
        newPages.innerHTML = myLibrary[i].pages;
        newStatus.innerHTML = myLibrary[i].status;
        removeBook.innerHTML = 'Delete';
        newDiv.classList.add('card');
        newDiv.appendChild(newAuthor);
        newDiv.appendChild(newTitle);
        newDiv.appendChild(newPages);
        newDiv.appendChild(newStatus);
        newDiv.appendChild(removeBook);
        library.appendChild(newDiv)
    }
    document.getElementById('author-input').value = '';
    document.getElementById('title-input').value = '';
    document.getElementById('pages-input').value = '';
}

submit.addEventListener('click', function getTarget(e) {
    e.preventDefault();
    addBooktoLibrary();
    publishLibrary();
})





// function addLibrary() {
//     const section = document.querySelector('.storage');
//     myLibrary.forEach(function(entry) {
//         const node = document.createTextNode(entry)
//         section.appendChild(node)
//     });
// }

// submit.addEventListener('click', function getTarget(e) {
//     e.preventDefault()
//     const authorInput = document.getElementById('author-input').value;
//     const titleInput = document.getElementById('title-input').value;
//     const pagesInput = document.getElementById('pages-input').value;
//     const statusInput = document.getElementById('status-input').value;
//     const newBook = new Book(authorInput, titleInput, pagesInput, statusInput)
//     addBooktoLibrary(newBook);
//     addLibrary();
// })



// Below is my testing ground.

// const main = document.querySelector('.storage');

// const submit = document.querySelector('#submit');
// submit.addEventListener('click', function getTarget(e) {
//     e.preventDefault();
//     newCard();
//     publishLibrary();
// })

// function Card(title, bodyText) {
//     this.title = title;
//     this.bodyText = bodyText;
// }

// const cardLibrary = [];

// function newCard() {
//     const title = document.querySelector('#title').value;
//     const bodyText = document.querySelector('#body-text').value;
//     const newCard = new Card(title, bodyText);
//     cardLibrary.push(newCard);
// }

// function publishLibrary() {
//     for (i = 0; i < cardLibrary.length; i++) {
//         const newDiv = document.createElement("div")
//         const newTitle = document.createElement('p')
//         const newBodyText = document.createElement('p')
//         newTitle.innerHTML = cardLibrary[i].title;
//         newBodyText.innerHTML = cardLibrary[i].bodyText;
//         newDiv.classList.add('card');
//         newDiv.appendChild(newTitle);
//         newDiv.appendChild(newBodyText);
//         main.appendChild(newDiv);
//     };
// }

