// Selects all elements
const burgerMenu = document.querySelector("#burger-menu");
const sideBarMenu = document.querySelector("#side-bar");
const mainSection = document.querySelector("#main-section");
const displayContact = document.querySelector("#display-contact")
const btnAddContact = document.querySelector("#btn-add-contact")
const btnAddLibelle = document.querySelector("#btn-add-libelle")
const popUpLibelle = document.querySelector("#pop-libelle")
const displayContactLength = document.querySelector("#display-contact-length")
const createContact = document.querySelector("#creat-contact")

// Callback functions
const handleAddStyle = (element, style) => {
  element.classList.add(style);
};

const handleRemoveStyle = (element, style) => {
  element.classList.remove(style);
};

// Add events
burgerMenu.addEventListener("click", (event) => {
  if (sideBarMenu.classList.contains("display-none")) {
    handleRemoveStyle(sideBarMenu, "display-none");
    handleRemoveStyle(mainSection, "w-100");
  } else {
    handleAddStyle(sideBarMenu, "display-none");
    handleAddStyle(mainSection, "w-100");
  } 
});

// add new libellé
btnAddLibelle.addEventListener("click", ()=>{
    popUpLibelle.classList.remove("hidden")
})

// remove pop-up libellé
const btnCancel = document.querySelector("#Cancel")

btnCancel.addEventListener("click", ()=>{
  popUpLibelle.classList.add("hidden")
})

// Togle button create contact
btnAddContact.addEventListener("click", ()=>{
  createContact.classList.toggle("hidden")
})
// Table of contact

let dataContacts = [];

displayContactLength.innerText = (dataContacts.length)



// Add contact

btnAddContact.addEventListener("click", ()=>{

})