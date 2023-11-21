// Consegna :
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz”, al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”


// BONUS 1:
// Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

//* andiamo a prendere il contenitore delle box

const container = document.querySelector(".container");

//* ci creiamo un ciclo che va da 1 a 100 numeri

for (let i = 1; i <= 100; i++) {
   
    const square = document.createElement("div");

    square.classList.add("square");

    square.append(i);

    container.append(square)

    console.log(square)


    //* se i numeri sono multipli di 3 e 5 stampiamo "FizzBuzz"
  
    if (i % 3 == 0 && i % 5 == 0) {
      output = "FizzBuzz";
      //* Altrimenti se i numeri sono multipli di 3 stampiamo "Fizz"
    } else if (i % 3 == 0) {
      output = "Fizz";
  
      //* Altrimenti se i numeri sono multipli di 5 stampiamo "Buzz"
    } else if (i % 5 == 0) {
      output = "Buzz";
  
      //* Altrimenti stampiamo il numero
    }

};