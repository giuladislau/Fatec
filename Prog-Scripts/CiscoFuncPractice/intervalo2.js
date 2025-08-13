const printNumbers = (n = 1, id = setInterval(() => (console.log(n), n === 10 ? clearInterval(id) : n++), 2000));
printNumbers();