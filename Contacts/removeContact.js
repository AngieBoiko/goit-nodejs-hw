const fs = require("fs").promises;
const listContacts = require("./listContacts");
const contactsPath = require("./contactsPath");

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const index = allContacts.findIndex(
    (item) => Number(item.id) === Number(contactId)
  );
  if (index === -1) {
    return null;
  }
  await allContacts.splice(index, 1);
  const updateContacts = JSON.stringify(allContacts);
  await fs.writeFile(contactsPath, updateContacts);
  return;
}

module.exports = removeContact;
