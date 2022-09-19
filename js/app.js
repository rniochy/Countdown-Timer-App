const nameInput = document.getElementById('name-input');
const date = document.getElementsByClassName('date');
const time = document.getElementsByClassName('time');
const button = document.getElementById('button');
const message = document.getElementById('alert-message');


button.addEventListener('click', function() {
    if(!nameInput.value){
        message.innerText = "The field 'name' is required."
        setTimeout(()=> message.innerText = "", 2000);
    }
})