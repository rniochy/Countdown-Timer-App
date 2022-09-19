const nameInput = document.getElementsByClassName('name');
const date = document.getElementsByClassName('date');
const time = document.getElementsByClassName('time');
const button = document.getElementById('button');
const message = document.getElementById('alert-message');


button.addEventListener('click', function() {
    
    if(nameInput){
        message.innerText = "The field 'name' is required.";
    }
})