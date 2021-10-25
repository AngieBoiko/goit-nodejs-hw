const listContacts = require("./listContacts");

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const result = allContacts.find(
    (item) => Number(item.id) === Number(contactId)
  );
  if (!result) {
    return null;
  }
  console.log(result);
  return result;
}

module.exports = getContactById;
