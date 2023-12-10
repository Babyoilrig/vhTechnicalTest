console.log("It works!");

//Selecting elements

const buttons = document.querySelectorAll('.button');
console.log(buttons);

const dailyDosagesButtons = document.querySelectorAll('.dosage-div button');
console.log(dailyDosagesButtons);

const administerFrequencyButtons = document.querySelectorAll(".administered-div button");
console.log(administerFrequencyButtons);

const totalDosage = document.querySelector('.total-dosage');
console.log(totalDosage);

const tabletTotalOneFifty = document.querySelector('.tablet-total-value-150');
console.log(tabletTotalOneFifty);

const tabletTotalSeventyFive = document.querySelector('.tablet-total-value-75');
console.log(tabletTotalSeventyFive);

const tabletDailyValueOneFifty = document.querySelector('.tablet-daily-value-150');
console.log(tabletDailyValueOneFifty);

const tabletDailyValueSeventyFive = document.querySelector('.tablet-daily-value-75');
console.log(tabletDailyValueSeventyFive);


// Adding listeners to daily dosage buttons and logging value
//Also checking if buttons have id of clicked and removing if necessary then adding id of clicked to button clicked
let dailyDoseInt = 0;

function handleDailyDoseClick(e, dailyDose) {
const blueDailyDoseButton = document.getElementById('clicked-daily-dose');
if (blueDailyDoseButton == null) {
    e.target.setAttribute('id', 'clicked-daily-dose');
} else {
    blueDailyDoseButton.removeAttribute('id', 'clicked-daily-dose');
    e.target.setAttribute('id', 'clicked-daily-dose');
}
    dailyDoseInt = parseFloat(e.target.dataset.value);
    console.log(dailyDoseInt);
    // return dailyDoseInt;
}
dailyDosagesButtons.forEach(button => button.addEventListener('click', handleDailyDoseClick));



//Adding listeners to administer frequency buttons and logging value
//Also checking if buttons have id of clicked and removing if necessary then adding id of clicked to button clicked
let adminFrequencyInt = 0;

function handleAdminFrequencyClick(e, adminFrequency) {
const blueAdminFrequencyButton = document.getElementById('clicked-admin-freq');
if (blueAdminFrequencyButton == null) {
    e.target.setAttribute('id', 'clicked-admin-freq');
} else {
    blueAdminFrequencyButton.removeAttribute('id', 'clicked-admin-freq');
    e.target.setAttribute('id', 'clicked-admin-freq');
}
    adminFrequencyInt = parseFloat(e.target.dataset.value);
    console.log(adminFrequencyInt);
    // return adminFrequencyInt;
}
administerFrequencyButtons.forEach(button => button.addEventListener('click', handleAdminFrequencyClick));


//Logic to check two buttons have been clicked before running handler function 

let firstButtonClicked = false;
let secondButtonClicked = false;

let totalDosageAmount = 0;

//Here (below) the dailyDoseInt and adminFrequencyInt values - aren't coming in

function handler() {
    // firstButtonClicked = false;
    // secondButtonClicked = false;
    totalDosageAmount = dailyDoseInt * adminFrequencyInt;
    console.log('I am the handler function and I have run!');
    totalDosage.textContent = `${totalDosageAmount}mg`
    calculateDailyDosage();
    console.log(totalDosageAmount);
}
// are needed to be multiplied together

dailyDosagesButtons.forEach(button => button.addEventListener('click', ()=>{
    firstButtonClicked = true;
    if(firstButtonClicked && secondButtonClicked) handler()
}))

administerFrequencyButtons.forEach(button => button.addEventListener('click', ()=>{
    secondButtonClicked = true;
    if(firstButtonClicked && secondButtonClicked) handler()
}));


//Calculating daily dose
let tabletDaily150 = 0;
let tabletDaily75 = 0;

function calculateDailyDosage() {
    console.log("I am the calculateDailyDosage function and I ran!")
    if(dailyDoseInt === 75){
        tabletDaily150 = 0;
        tabletDaily75 = 1;
    } else if(dailyDoseInt === 150){
        tabletDaily150 = 1;
        tabletDaily75 = 0;
    } else if(dailyDoseInt === 225){
        tabletDaily150 = 1;
        tabletDaily75 = 1;
    } else if(dailyDoseInt === 300){
        tabletDaily150 = 2;
        tabletDaily75 = 0; 
    } else if(dailyDoseInt === 375){
        tabletDaily150 = 2;
        tabletDaily75 = 1;
    } else {
        tabletDaily150 = 3;
            tabletDaily75 = 0;
    }
}

// switch (dailyDoseInt === 0) {
//     //default case 
//         default:
//         break;
//     //case for 75mg
//         case 'dailyDoseInt === 75':
//         tabletDaily150 = 0;
//         tabletDaily75 = 1;
//         // console.log("0 x 150mg, 1 x 75mg")
//         break;
//     //case for 150mg
//         case 'dailyDoseInt === 150':
//         tabletDaily150 = 1;
//         tabletDaily75 = 0;
//         break;
//     //case for 225mg
//         case 'dailyDoseInt === 225':
//         tabletDaily150 = 1;
//         tabletDaily75 = 1;
//         break;    
//     //case for 300mg
//         case 'dailyDoseInt === 300':
//         tabletDaily150 = 2;
//         tabletDaily75 = 0;
//         break;
//     //case for 375mg
//         case 'dailyDoseInt === 375':
//         tabletDaily150 = 2;
//         tabletDaily75 = 1;
//         break;    
//         //case for 450 mg 
//         case 'dailyDoseInt === 450':
//         tabletDaily150 = 3;
//         tabletDaily75 = 0;
//         break;   
        
    
//     }









