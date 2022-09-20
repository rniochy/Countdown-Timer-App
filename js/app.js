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

     const date = new Date(dateInput.value+""); 
    if(date < new Date() && date.getDate()){
        message.innerText = "The date is not corretly.."
        setTimeout(()=> message.innerText = "", 3000);
    } else {
         console.log(date.getMinutes(), date.getHours())
    }
})