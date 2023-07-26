const fs = require("fs").promises;
const path = require("path");
require("colors");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументувати кожну функцію
const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath, { encoding: "utf-8" });
    return JSON.parse(contacts);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
}

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    return contacts.filter(({ id }) => id === contactId);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
  }
};

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту. 
}

listContacts();

module.exports = {
  listContacts,
  getContactById,
  // removeContact,
  // addContact,
};