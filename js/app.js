const nameInput = document.getElementById('name-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const displaySchedule = document.getElementById('schedule');
const button = document.getElementById('button');
const message = document.getElementById('alert-message');
let endToCount = false;


function display(dayCounter, hours,minutes, seconds, endToCount){
    return `
    <div id="schedule" class="schedule div-container"> 
    <h2 class=${endToCount? "endToCount": ''}>${dayCounter} - ${hours} - ${minutes} - ${seconds < 10 ? '0'+seconds: seconds}</h2>;
    </div> `
}

function countDown(date,displaySchedule, timeInput){
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
       displaySchedule.innerHTML = display(dayCounter, hours,minutes, seconds, endToCount);
       
       if(seconds ===0 ){
           seconds = 59;
           minutes--;

        }else if((((hours*60)) - 60) === minutes && hours > 0){
             hours--;

        }else if((dayCounter * 24) === hours && dayCounter > 0)  {
             dayCounter--;

         } else if(dayCounter === 0 && hours === 0 && minutes === 0){
                clearInterval(timer);
                endToCount = true;
                displaySchedule.innerHTML = display(dayCounter, hours,minutes, seconds, endToCount );
         } else {
            seconds--;
        }
    }, 1000);
}

button.addEventListener('click',async function() {
    if(!nameInput.value){
        message.innerText = "The field 'name' is required."
        setTimeout(()=> message.innerText = "", 3000);
    } 

    const date = new Date(dateInput.value+""); 
    if((date > new Date()) && (date.getFullYear() < 2030)){
        countDown(date,displaySchedule, timeInput);

    } else {
        message.innerText = "The date is not corretly.."
        setTimeout(()=> message.innerText = "", 3000);
    }
})