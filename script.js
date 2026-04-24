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

    const respone = await fetch(`https://api-wisdom.deontex.com/api/v1/quotes?search=?${name}`)
    const allQuotes = await respone.json();
        const found = allQuotes.data.filter(q => q.philosopher_name);
        console.log(found.length)
        
        const dispalyQuote = Math.floor(Math.random()*found.length)
        console.log(dispalyQuote);
        
    if(found){
        quotetext.textContent =  found[dispalyQuote].quote_text
        quoteauthor.textContent= found[dispalyQuote].philosopher_name
    } else{
         quotetext.textContent = "we did not found"
    }
    

    } catch(error) {
        quotetext.textContent="problem in internet";
    }
 } 
 searchButton.addEventListener('click', fINDQuote);