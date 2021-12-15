function isPrimeNumber(x) {
   for(let i = 2; i < x; i++){
       if(x % i === 0){
           return false;
       }
    
   };
   return x > 1
};

//example

console.log(isPrimeNumber(117));