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
             const curent_date = new Date();
             let year = date.getFullYear() - curent_date.getFullYear();
             let month = (date.getMonth()+1) - (curent_date.getMonth()+1); 
             let day = Math.abs(date.getDate() -  curent_date.getDate());  

             if(month < 0) month = 12 - Math.abs(month);

             let dayCounter = (year * 365) + (month * 30) + day;
             let hours = (dayCounter * 24) - curent_date.getHours();

             console.log(dayCounter, hours)
    }
})