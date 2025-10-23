/*
Challenge:
1. Wire up this search pattern app so that inputting 
   a full or partial name brings up the matching     
   contact or contacts.
*/

import { contactsArr } from '/contactsData.js'

const patternSearchInput = document.getElementById('pattern-search-input')
const patternSearchSubmit = document.getElementById('pattern-search-submit')
const contactDisplay = document.getElementById('contact-display')

function renderContact(contactObj) {
    const {name, phone, email } = contactObj
    const contactCard = document.createElement('aside')
    contactCard.classList.add('contact-card')
    const nameObj = document.createElement('p')
    const phoneObj = document.createElement('p')
    const emailObj = document.createElement('p')
    nameObj.innerHTML = name
    phoneObj.innerHTML = phone
    emailObj.innerHTML = email
    contactCard.appendChild(nameObj)
    contactCard.appendChild(emailObj)
    contactCard.appendChild(phoneObj)
    contactDisplay.appendChild(contactCard)
}

patternSearchSubmit.addEventListener('click', function(){
    findMatchingContacts(contactsArr, patternSearchInput.value) 
})

function findMatchingContacts(contactsArr, regexPattern){
    contactDisplay.innerHTML = ''
    const regex = new RegExp(regexPattern, 'i')
        contactsArr.filter(matchData => {
            return regex.test(matchData.name)
 }).forEach(findContact => {
    renderContact(findContact)
 })           
}