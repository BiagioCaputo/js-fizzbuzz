console.log("JS OK")

//variabili



//recupero il contenitore della mia lista

const containerUl = document.querySelector(".ul-container")

//inizializzo la mia lista

let listNumbers = '<ul class="list-unstyled d-flex gap-3 flex-wrap">';

//ciclo for per i numeri da 1 a 100
for(let i = 1; i <= 100; i++){ 

    //inserisco la i in una variabile per non interrompere il ciclo

    let number = i;  
    
    //impongo le mie condizioni e a seconda dello stato della variabile stampo in maniera differente i miei li con i rispettivi background
    
    if(i % 5 === 0 && i % 3 === 0){
        number = "fizzbuzz";
        listNumbers += ` <li class="square bg-square-fizz-buzz d-flex align-items-center justify-content-center"><span>${number}</span></li>` ;
    }

    else if(i % 3 === 0){   
        number = "fizz"; 
        listNumbers += ` <li class="square bg-square-fizz d-flex align-items-center justify-content-center"><span>${number}</span></li>` ;
    }

    else if(i % 5 === 0){
        number = "buzz";
        listNumbers += ` <li class="square bg-square-buzz d-flex align-items-center justify-content-center"><span>${number}</span></li>` ;
    }

    else{
        listNumbers += ` <li class="square bg-square-blu d-flex align-items-center justify-content-center"><span>${number}</span></li>` ;
    }

}

//chiudo la mia lista
listNumbers += "</ul>";

//pubblico la mia lista nell'html
containerUl.innerHTML += listNumbers;
    
