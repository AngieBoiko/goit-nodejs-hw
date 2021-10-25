const fs = require("fs").promises;
const listContacts = require("./listContacts");
const contactsPath = require("./contactsPath");
const { v4: uuidv4 } = require("uuid");

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const id = uuidv4();
  const newContact = { id, name, email, phone };
  allContacts.push(newContact);

  const contactsStr = JSON.stringify(allContacts);
  await fs.writeFile(contactsPath, contactsStr);
  return;
}

module.exports = addContact;
