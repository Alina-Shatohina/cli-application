const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);
    

async function listContacts() {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
}

async function getContactById(id) {
    const contact = await listContacts();
    const result = contact.find(item => item.id === id);
    return result || null;
}

// function removeContact(contactId) {
  
// }

// async function addContact(name, email, phone) {
//     const addContact = await fs.appendFile("./db/contacts.json", "name, email, phone")
//     console.log(addContact);
// }


    module.exports = {
        listContacts,
        getContactById,
    }