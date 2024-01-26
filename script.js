const ok = document.querySelector('.ok');
const notOk = document.querySelector('.not-ok');
const yearResult = document.querySelector('.year-result');
const monthResult = document.querySelector('.month-result');
const dayResult = document.querySelector('.day-result');
const dayInput = document.querySelector('.day-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const dayHeader = document.querySelector('.day-header');
const monthHeader = document.querySelector('.month-header');
const yearHeader = document.querySelector('.year-header');
var check;
function dayWrong() {
    if(monthInput.value == 4 || monthInput.value == 6 ||monthInput.value == 9 ||monthInput.value == 11 ){
        if(dayInput.value >30 || dayInput.value < 1){
            dayInput.style.border="2px solid red";
            dayHeader.style.color="red";
            document.querySelector('.error-day').innerHTML = 'must be a valid day' ;
            check = false; 
        }
    }else if(monthInput.value == 2) {
        if(dayInput.value >29 || dayInput.value < 1){
            dayInput.style.border="2px solid red";
            dayHeader.style.color="red";
            document.querySelector('.error-day').innerHTML = 'must be a valid day' ;
            check = false;
        }    
    }else  {
        if(dayInput.value >31 || dayInput.value < 1){
            dayInput.style.border="2px solid red";
            dayHeader.style.color="red";
            document.querySelector('.error-day').innerHTML = 'must be a valid day';
            check = false;
        }
        if(dayInput.value==""){
            dayInput.style.border="2px solid red";
            dayHeader.style.color="red";
            document.querySelector('.error-day').innerHTML = 'this field is required' ;
            check = false;
        }
    }
    setTimeout(function(){
        dayInput.style.border="2px solid black";
        dayHeader.style.color="black";
        document.querySelector('.error-day').innerHTML = '' ;
    },3500)
}
function monthWrong() {
    if(monthInput.value >12 || monthInput.value < 1){
        monthInput.style.border="2px solid red";
        monthHeader.style.color="red";
        document.querySelector('.error-month').innerHTML = 'not a valid date' ;
        check = false;
    }
    if(monthInput.value==""){
        monthInput.style.border="2px solid red";
        monthHeader.style.color="red";
        document.querySelector('.error-month').innerHTML = 'this field is required' ;
        check = false;
    }
    setTimeout(function(){
        monthInput.style.border="2px solid black";
        monthHeader.style.color="black";
        document.querySelector('.error-month').innerHTML = '' ;
    },3500)
}
function yearWrong() {
    if(yearInput.value >2024 || yearInput.value < 1890){
        yearInput.style.border="2px solid red";
        yearHeader.style.color="red";
        document.querySelector('.error-year').innerHTML = 'must be a valid date' ;
        check = false;
    }
    if(yearInput.value==""){
        yearInput.style.border="2px solid red";
        yearHeader.style.color="red";
        document.querySelector('.error-year').innerHTML = 'this field is required' ;
        check = false;
    }
    setTimeout(function(){
        yearInput.style.border="2px solid black";
        yearHeader.style.color="black";
        document.querySelector('.error-year').innerHTML = '' ;
    },3500)
}
notOk.addEventListener('click',function() {
   dayInput.value = "";
   monthInput.value = "";
   yearInput.value = "";
   document.querySelector('.year-result').innerHTML = '--';
   document.querySelector('.month-result').innerHTML = '--';
   document.querySelector('.day-result').innerHTML = '--';
});
function age() {
    var d1 = dayInput.value;
    var m1 = monthInput.value;
    var y1 = yearInput.value;

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(d1> d2){
        d2 = d2 + month[m2 -1];
        m2 = m2 - 1 ;
    }
    if(m1> m2){
        m2 = m2 + 12;
        y2 = y2 -1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;
    document.querySelector('.year-result').innerHTML = y;
    document.querySelector('.month-result').innerHTML = m;
    document.querySelector('.day-result').innerHTML = d;
}
