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
    }
];

//para exibir um contato específico
function showContact(contactList, index) {
    if (!Array.isArray(contactList) || index < 0 || index >= contactList.length) {
        console.log("Erro: Lista inválida.");
        return;
    }
    console.log(`Nome: ${contactList[index].nome}, Telefone: ${contactList[index].telefone}, Número: ${contactList[index].numero}`);
}

//para exibir todos os contatos
function showAllContacts(contactList) {
    if (!Array.isArray(contactList)) {
        console.log("Erro: A lista de contatos não é válida.");
        return;
    }
    console.log("Lista de contatos:");
    contactList.forEach(contact => 
        console.log(`Nome: ${contact.nome}, Telefone: ${contact.telefone}, Número: ${contact.numero}`)
    );
}

//para adicionar um novo contato
function addNewContact(contactList, nome, telefone, numero) {
    if (!Array.isArray(contactList) || !nome || !telefone || !numero) {
        console.log("Erro: Dados inválidos para adicionar um novo contato.");
        return;
    }
    contactList.push({ nome, telefone, numero });
    console.log(`Contato ${nome} adicionado com sucesso!`);
}

// Teste
showAllContacts(contacts);                          // Exibe todos os contatos
showContact(contacts, 1);                           // Exibe o contato de índice 1
addNewContact(contacts, "Giullia", "5555-5555", 3); // Adiciona um novo contato
showAllContacts(contacts);                          // Exibe novamente para verificar a adição
