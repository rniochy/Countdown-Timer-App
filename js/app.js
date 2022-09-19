const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const button = document.getElementById('button');
const message = document.getElementById('alert-message');


button.addEventListener('click', function() {
    if(!nameInput.value){
        message.innerText = "The field 'name' is required."
        setTimeout(()=> message.innerText = "", 3000);
    } 
        alert(dateInput)
    if(new Date(`${dateInput.value}`) < new Date()){
        message.innerText = "The date is not corretly.."
        setTimeout(()=> message.innerText = "", 3000);
    }
})