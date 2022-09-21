const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const displaySchedule = document.getElementById('schedule');
const button = document.getElementById('button');
const message = document.getElementById('alert-message');


button.addEventListener('click', function() {
    if(!nameInput.value){
        message.innerText = "The field 'name' is required."
        setTimeout(()=> message.innerText = "", 3000);
    } 

     const date = new Date(dateInput.value+""); 

    if((date < new Date() && date.getDate()) && (date.getFullYear() > 2024)){
        message.innerText = "The date is not corretly.."
        setTimeout(()=> message.innerText = "", 3000);
    } else {
             const curent_date = new Date();
             let year = date.getFullYear() - curent_date.getFullYear();
             let month = (date.getMonth()+1) - (curent_date.getMonth()+1); 
             let day = Math.abs(date.getDate() -  curent_date.getDate());  
             let minutesCurrent = curent_date.getMinutes();

             if(month < 0) month = 12 - Math.abs(month);

             let dayCounter = (year * 365) + (month * 30) + day;
             let hours = (dayCounter * 24) - curent_date.getHours();
             let minutes = hours * 60;
             let seconds = 59 - curent_date.getSeconds();
             
             minutes = (minutes - (24 - hours)) - minutesCurrent;
             dayCounter = Math.floor((minutes/24)/60);

             setInterval(()=>{ 
                 

                displaySchedule.innerHTML = `<h2>${hours} ${dayCounter} ${minutes} ${seconds}</h2>`;

                if(seconds ===0 ){
                    seconds = 59;
                    minutes--;
                }else if(minutes === 0){
                     hours--;
                } else if(hours === 0){
                        dayCounter--;
                }else {
                    seconds--;
                }
                }, 1000);
    }
})