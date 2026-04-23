const Inputtext  = document.querySelector('input');
const searchButton = document.querySelector('button');
const quotetext = document.getElementById ('quote-text');
const quoteauthor = document.getElementById('quote-author');
const favoriteText = document.getElementById('favorite-text');
 async function fINDQuote() {
    const name = Inputtext.value;
    
    if(name === "") {
        quotetext.textContent= "write a name please "
        return;
    } 
    quotetext.textContent = "im searching now !!"
    quoteauthor.textContent= ""
   try {

    const respone = await fetch ('https://api-wisdom.deontex.com/api/v1/quotes?search=&philosopher_id=&topic=&limit=20&offset=0');
    const allQuotes = await respone.json();
        const found = allQuotes.find(q => q.author.toLowerCase().includes(name.toLowerCase()));

    if(found){
        quotetext.textContent =  found.quote
        quoteauthor.textContent= found.author
    } else{
         quotetext.textContent = "we did not found"
    }
    

    } catch(error) {
        quotetext.textContent="problem in internet";
    }
 } 
 searchButton.addEventListener('click', fINDQuote);