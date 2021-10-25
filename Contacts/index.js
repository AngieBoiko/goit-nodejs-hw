const listContacts = require("./listContacts");
const getContactById = require("./getContactById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");
const contactsPath = require("./contactsPath");

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  contactsPath,
};
