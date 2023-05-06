const contacts = require("./contacts");
console.log(contacts);

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
          const allContacts = await contacts.listContacts();
          return console.log(allContacts);
      // break;

      case "get":
          const oneContact = await contacts.getContactById(id);
          return console.log(oneContact);
      // break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

// invokeAction({ action: "list" });
invokeAction({action:"get", id:"qdggE76Jtbfd9eWJHrssH"});