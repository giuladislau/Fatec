function printNumbers(){
    for (let i = 1; i <= 10; i++){
        setTimeout(() => console.log(i), i * 2000);
    }
}

printNumbers();
