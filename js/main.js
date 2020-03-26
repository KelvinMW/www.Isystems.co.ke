const countdown= document.querySelector('.countdown');
//set launch date ms
const LaunchDate=new Date('September,05,2018 15:00:00').getTime();

//Update Every Second
const Intvl=setInterval(()=>{

    //Get today's date and time in ms
const Now= new Date().getTime();

//Get time differene
Difference= LaunchDate-Now;

//Time calculations
const days=Math.floor((Difference)/(1000*60*60*24));
const hours=Math.floor((Difference%(1000*60*60*24))/(1000*60*60));
const mins=Math.floor((Difference%(1000*60*60))/(1000*60));
const seconds=Math.floor((Difference%(1000*60))/1000);

//Display Results
countdown.innerHTML=
`<div>${days}<span> Days</span></div>
<div>${hours}<span> Hours</span>></div>
<div>${mins}<span> Minutes</span></div>
<div>${seconds}<span> Seconds</span></div>
`;

//If Launch Date is passed
if(Difference<0){
    //Stop the countdown 
    clearInterval(Intvl);
    
    //Style and output text
countdown.style.color='#17a2b8';
countdown.innerHTML='Working!';
}
},1000);