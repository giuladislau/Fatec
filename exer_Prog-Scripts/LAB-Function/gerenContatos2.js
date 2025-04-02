// Lista de contatos inicial
let contacts = [
    { 
        nome: "Alice", 
        telefone: "1234-5678", 
        numero: 1 
    },
    { 
        nome: "Bob", 
        telefone: "8765-4321", 
        numero: 2 
    },
    { 
        nome: "Giullia", 
        telefone: "5555-5555", 
        numero: 3 }
];

//para exibir um contato específico
function showContact(contactList, index){
    if (!Array.isArray(contactList) || index < 0 || index >= contactList.length){
        console.log("Erro: Lista inválida.");
        return;
    }
    console.log(`Nome: ${contactList[index].nome}, Telefone: ${contactList[index].telefone}, Número: ${contactList[index].numero}`);
}

//para exibir todos os contatos
function showAllContacts(contactList){
    if (!Array.isArray(contactList)){
        console.log("Erro: A lista de contatos não é válida.");
        return;
    }
    console.log("Lista de contatos:");
    contactList.forEach(contact => 
        console.log(`Nome: ${contact.nome}, Telefone: ${contact.telefone}, Número: ${contact.numero}`)
    );
}

//para adicionar um novo contato
function addNewContact(contactList, nome, telefone, numero){
    if (!Array.isArray(contactList) || !nome || !telefone || !numero){
        console.log("Erro: Dados inválidos para adicionar um novo contato.");
        return;
    }
    contactList.push({ nome, telefone, numero });
    console.log(`Contato ${nome} adicionado com sucesso!`);
}

//para ordenar contatos
function sortContacts(contactList, key){
    if (!Array.isArray(contactList) || !["nome", "telefone", "numero"].includes(key)) {
        console.log("Erro: Critério de ordenação inválido.");
        return;
    }

    contactList.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    console.log(`Contatos ordenados por ${key}:`);
    showAllContacts(contactList);
}

// Teste
console.log("\nLista original:");
showAllContacts(contacts);

console.log("\nOrdenando por nome:");
sortContacts(contacts, "nome");

console.log("\nOrdenando por telefone:");
sortContacts(contacts, "telefone");

console.log("\nOrdenando por número:");
sortContacts(contacts, "numero");
