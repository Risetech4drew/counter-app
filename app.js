let countEl = document.getElementById('count-el') // getting the html eloment with id 'count-el'
let saveEl = document.getElementById('save-el')  //  getting the html eloment with id 'save-el'
let totalEl = document.getElementById('total-el')

let count = 0 // decalaring count variable and setting to 0 

function counter() {

   count += 1;    // incrementing count by 1
   countEl.textContent = count;
}

function save() {
    let counterStr = count + " - ";
    count = 0
    saveEl.textContent += counterStr;
    countEl.textContent = count
    
}
