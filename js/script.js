console.log("JS OK")

//variabili



//recupero il contenitore della mia lista

const containerUl = document.getElementById("ul-container")

//inizializzo la mia lista

let listNumbers = "<ul>";

//ciclo for per i numeri da 1 a 100
for(let i = 1; i <= 100; i++){ 

    //inserisco la i in una variabile per non interrompere il ciclo

    let number = i;  
    
    //impongo le mie condizioni 

    if(i % 3 === 0){   
        number = "fizz"; 
    }

    if(i % 5 === 0){
        number = "buzz";
    }

    if(i % 5 === 0 && i % 3 === 0){
        number = "fizzbuzz";
    }
    //salvo la mia variabile nel mio li
    listNumbers += ` <li>${number}</li>` ;
} 

//chiudo la mia lista
listNumbers += "</ul>";

//pubblico la mia lista nell'html
containerUl.innerHTML = listNumbers;
    
