function creaCard(book) {
    console.log(book)

    let col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2';
    col.id = book.asin

    let card = document.createElement('div');
    card.className = 'card';
    card.style.width = "100%"
   card.style.height = "100%"

    
    let cardImage = document.createElement('img');
    cardImage.className = 'card-img-top';
    cardImage.src = book.img;
    cardImage.style.width = "100%" 
    cardImage.style.height = "400px" 
    
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent =  book.title;

    let cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = book.price;

   
    let cardLink = document.createElement('a');
    cardLink.className = 'btn btn-primary';
    cardLink.textContent = 'Scarta';
    cardLink.addEventListener("click", function() {
        const colonna = document.getElementById(book.asin)
        colonna.hidden= true
       
     })

    let cardLink2 = document.createElement('a');
     cardLink2.className = 'btn btn-success';
     cardLink2.textContent = 'Compra ora';
     cardLink2.addEventListener("click", function() {
        const list = document.getElementById("list")
       
            const newLi = document.createElement('li')
            newLi.innerText = book.title
        
        
            newLi.classList.add('list-group-item')
            newLi.id="list"+book.asin

            let cardLink3 = document.createElement('a');
            cardLink3.className = 'btn btn-success';
            cardLink3.textContent = 'Remove';
            cardLink3.addEventListener("click", function() {
                
                const list = document.getElementById("list")
                const elementi = document.getElementById("list"+book.asin)
        
                list.removeChild(elementi)
                localStorage.removeItem('book' + book.asin)})

            newLi.appendChild(cardLink3)
            list.appendChild(newLi)
            localStorage.setItem('book' + book.asin, JSON.stringify(book))  
      })
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardLink);
    cardBody.appendChild(cardLink2);

    
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    col.appendChild(card);
    
    document.getElementById('card-container').appendChild(col);
}







const getBooks = function () {
    fetch(
      ' https://striveschool-api.herokuapp.com/books'
    )
      .then((response) => {
        console.log(response)
        if (response.ok) {
        
          return response.json()
        } else {
          throw new Error('Qualcosa è andato storto nella chiamata di rete')
          
        }
      })
      .then((books) => {
        
        for (let i = 0; i < books.length; i++) {
            creaCard(books[i])
        }
      })
      .catch((err) => {
        console.log('ERRORE!', err)
      })
  }
  
  getBooks()