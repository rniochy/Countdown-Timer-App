const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const displaySchedule = document.getElementById('schedule');
const button = document.getElementById('button');
const message = document.getElementById('alert-message');

function display(dayCounter, hours,minutes, seconds ){
    return `
    <div id="schedule" class="schedule div-container"> 
    <h2>${dayCounter} - ${hours} - ${minutes} - ${seconds < 10 ? '0'+seconds: seconds}</h2>;
    </div> `
}

button.addEventListener('click', function() {
    if(!nameInput.value){
        message.innerText = "The field 'name' is required."
        setTimeout(()=> message.innerText = "", 3000);
    } 

     const date = new Date(dateInput.value+""); 
     console.log(date > new Date())
    if((date > new Date()) && (date.getFullYear() < 2025)){

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

        const timer = setInterval(()=>{ 
           displaySchedule.innerHTML = display(dayCounter, hours,minutes, seconds );
           
           if(seconds ===0 ){
               seconds = 59;
               minutes--;

            }else if((((hours*60)) - hours) === minutes && hours > 0){
                 hours--;

            }else if((dayCounter * 24) === hours && hours > 0)  {
                    dayCounter--;

             } else if(dayCounter === 0 && hours === 0 && minutes === 0){
                    clearInterval(timer);
                    displaySchedule.innerHTML =display(dayCounter, hours,minutes, seconds );
             }
             else {
                seconds--;
            }
        }, 1000);
    } else {
        message.innerText = "The date is not corretly.."
        setTimeout(()=> message.innerText = "", 3000);
    }
})