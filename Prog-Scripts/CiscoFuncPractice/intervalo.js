let count = 1;

const intervalId = setInterval(() =>{
    console.log(count);
    
    if (count === 10){
        clearInterval(intervalId); 
    }

    count++;
}, 2000);
