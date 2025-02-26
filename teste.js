let cliente =[
    {
        nome: "Maria",
        idade: 26,
        idoso: false,
        endereço: "rua Hum",
        numero: 1230,
        CEP: "11.111-111",
        CPF: "000.000.000-00"
    },
    {
        nome:"José",
        idade: 65,
        idoso: true,
        endereço: "rua Dois",
        numero: 2130,
        CEP: "22.2222-22",
        CPF: "222.222.222-22"
    }
];
cliente[2] = {
    nome: "Aparecido",
    idade: 58,
    idoso: false,
    endereço: "rua Dois",
    numero: 2130,
    CEP: "22.2222-22",
    CPF: "333.333.333-33"
};
cliente[1] = {};

console.log("cliente-0", cliente[0].nome);
console.log("cliente-1", cliente[1].nome);
console.log("cliente-2", cliente[2].nome);