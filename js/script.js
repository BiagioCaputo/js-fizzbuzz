console.log("JS OK")

//variabili




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

    //stampo nella console la mia lista
    console.log(number)
    
} 
